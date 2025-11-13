import json
import os
import re
from typing import Any, Dict, List

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SERVICES_PATH = os.path.join(ROOT_DIR, "data", "services.long.json")

SLUG_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")

REQUIRED_FIELDS = ["slug", "title", "lead"]
ALLOWED_PRICING = {"start", "grow", "scale"}

ARRAY_STRING_FIELDS = [
    "who",
    "benefits",
    "deliverables",
    "integrations",
    "risks",
]

def load_services(path: str) -> List[Dict[str, Any]]:
    if not os.path.exists(path):
        raise FileNotFoundError(f"File not found: {path}")

    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    if not isinstance(data, list):
        raise ValueError("services.long.json must contain a JSON array at top level")

    return data


def validate_service(service: Dict[str, Any], index: int) -> List[str]:
    """
    Возвращает список сообщений (errors/warnings) для одной услуги.
    """
    messages: List[str] = []

    slug = service.get("slug")
    prefix = f"[{index}] slug={slug!r}: "

    # 1. Обязательные поля
    for field in REQUIRED_FIELDS:
        if field not in service or not isinstance(service[field], str) or not service[field].strip():
            messages.append(prefix + f"ERROR: missing or empty required field '{field}'")

    # Если slug есть, проверяем формат
    if isinstance(slug, str):
        if not SLUG_RE.match(slug):
            messages.append(prefix + "ERROR: slug has invalid format (allowed: [a-z0-9-], no spaces)")
    else:
        messages.append(prefix + "ERROR: slug is not a string")

    # 2. pricingRef
    pricing_ref = service.get("pricingRef")
    if pricing_ref is not None:
        if pricing_ref not in ALLOWED_PRICING:
            messages.append(
                prefix
                + f"ERROR: invalid pricingRef={pricing_ref!r} (must be one of {sorted(ALLOWED_PRICING)})"
            )

    # 3. Строковые массивы (who, benefits, deliverables, integrations, risks)
    for field in ARRAY_STRING_FIELDS:
        if field in service:
            value = service[field]
            if not isinstance(value, list):
                messages.append(prefix + f"ERROR: field '{field}' must be a list of strings")
            else:
                for i, item in enumerate(value):
                    if not isinstance(item, str):
                        messages.append(
                            prefix
                            + f"ERROR: field '{field}[{i}]' is not a string (type={type(item).__name__})"
                        )
                    elif not item.strip():
                        messages.append(
                            prefix
                            + f"WARNING: field '{field}[{i}]' is an empty/whitespace-only string"
                        )

    # 4. process
    process = service.get("process")
    if process is not None:
        if not isinstance(process, list):
            messages.append(prefix + "ERROR: 'process' must be a list of objects")
        else:
            for i, step in enumerate(process):
                if not isinstance(step, dict):
                    messages.append(
                        prefix
                        + f"ERROR: process[{i}] must be an object, got {type(step).__name__}"
                    )
                    continue
                if "name" not in step or not isinstance(step["name"], str) or not step["name"].strip():
                    messages.append(prefix + f"ERROR: process[{i}].name is missing or empty")

    # 5. cases
    cases = service.get("cases")
    if cases is not None:
        if not isinstance(cases, list):
            messages.append(prefix + "ERROR: 'cases' must be a list of objects")
        else:
            for i, case in enumerate(cases):
                if not isinstance(case, dict):
                    messages.append(
                        prefix
                        + f"ERROR: cases[{i}] must be an object, got {type(case).__name__}"
                    )
                    continue
                if "name" not in case or not isinstance(case["name"], str) or not case["name"].strip():
                    messages.append(prefix + f"ERROR: cases[{i}].name is missing or empty")

    # 6. faq
    faq = service.get("faq")
    if faq is not None:
        if not isinstance(faq, list):
            messages.append(prefix + "ERROR: 'faq' must be a list of objects")
        else:
            for i, qa in enumerate(faq):
                if not isinstance(qa, dict):
                    messages.append(
                        prefix + f"ERROR: faq[{i}] must be an object, got {type(qa).__name__}"
                    )
                    continue
                q = qa.get("q")
                a = qa.get("a")
                if not isinstance(q, str) or not q.strip():
                    messages.append(prefix + f"ERROR: faq[{i}].q is missing or empty")
                if not isinstance(a, str) or not a.strip():
                    messages.append(prefix + f"ERROR: faq[{i}].a is missing or empty")

    # 7. SEO
    seo = service.get("seo")
    if seo is None:
        messages.append(prefix + "WARNING: seo block is missing")
    elif not isinstance(seo, dict):
        messages.append(prefix + "ERROR: 'seo' must be an object")
    else:
        seo_title = seo.get("title")
        seo_desc = seo.get("description")
        if not isinstance(seo_title, str) or not seo_title.strip():
            messages.append(prefix + "WARNING: seo.title is missing or empty")
        if not isinstance(seo_desc, str) or not seo_desc.strip():
            messages.append(prefix + "WARNING: seo.description is missing or empty")

    return messages


def main() -> None:
    print(f"Using services file: {SERVICES_PATH}")
    services = load_services(SERVICES_PATH)
    print(f"Loaded {len(services)} services\n")

    all_messages: List[str] = []
    slugs_seen = {}
    duplicate_slugs: List[str] = []

    for idx, service in enumerate(services):
        if not isinstance(service, dict):
            all_messages.append(f"[{idx}] ERROR: item is not an object (type={type(service).__name__})")
            continue

        slug = service.get("slug")
        if isinstance(slug, str):
            if slug in slugs_seen:
                duplicate_slugs.append(slug)
            else:
                slugs_seen[slug] = idx
        else:
            all_messages.append(f"[{idx}] ERROR: service has no valid 'slug'")

        all_messages.extend(validate_service(service, idx))

    if duplicate_slugs:
        dup_list = ", ".join(sorted(set(duplicate_slugs)))
        all_messages.append(f"\nGLOBAL ERROR: duplicate slug(s) found: {dup_list}")

    errors = [m for m in all_messages if "ERROR:" in m]
    warnings = [m for m in all_messages if "WARNING:" in m]

    if all_messages:
        print("Validation report:\n")
        for m in all_messages:
            print(m)
        print("\n---")
    else:
        print("No issues found.\n")

    print(f"Total services: {len(services)}")
    print(f"Errors:   {len(errors)}")
    print(f"Warnings: {len(warnings)}")

    if errors:
        exit(1)
    else:
        exit(0)


if __name__ == "__main__":
    main()
