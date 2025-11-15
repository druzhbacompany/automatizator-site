const fs = require('fs');
const p = 'app/components/ContactForm.tsx';
if (!fs.existsSync(p)) {
  console.error('ContactForm not found:', p);
  process.exit(2);
}
let s = fs.readFileSync(p, 'utf8');

// добавить ts (время начала заполнения), если нет
if (!/useState\(\s*\(\)\s*=>\s*Date\.now\(\)\s*\)/.test(s)) {
  s = s.replace(/function\s+ContactForm\(([^)]*)\)\s*\{/,
    'function ContactForm($1){\n  const [ts] = useState(() => Date.now());');
}

// добавить honeypot input (website), если нет
if (!/name="website"/.test(s)) {
  s = s.replace(
    /<div className="grid gap-3">/,
    '<div className="grid gap-3">\\n        <input name="website" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden="true" />'
  );
}

// передавать website и ts в payload
s = s.replace(
  /body:\s*JSON\.stringify\(\{\s*name,\s*email,\s*phone,\s*message\s*\}\)/,
  'body: JSON.stringify({ name, email, phone, message, website: "", ts })'
);

fs.writeFileSync(p, s);
console.log('ContactForm patched');
