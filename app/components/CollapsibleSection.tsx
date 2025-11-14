'use client';

import { useState, type ReactNode } from 'react';
import clsx from 'clsx';

type CollapsibleSectionProps = {
  title: string;
  children: ReactNode;
  initialOpen?: boolean;
  className?: string;
};

export default function CollapsibleSection({
  title,
  children,
  initialOpen = false,
  className,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <section className={clsx('mt-8', className)}>
      <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 px-5 pt-4 pb-8">
        {/* Заголовок */}
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm font-semibold tracking-tight text-slate-50 sm:text-base">
            {title}
          </h2>
        </div>

        {/* Контент */}
        {isOpen && (
          <div className="mt-4 text-xs text-slate-200 sm:text-sm">
            {children}
          </div>
        )}

        {/* Кнопка-переключатель внизу по центру */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute left-1/2 bottom-0 flex h-9 w-9 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-slate-100/90 bg-slate-950 text-slate-50 shadow-lg transition hover:border-emerald-300 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
          aria-expanded={isOpen}
        >
          <span
            className={clsx(
              'text-xl leading-none transition-transform duration-200',
              isOpen && 'rotate-45'
            )}
          >
            +
          </span>
        </button>
      </div>
    </section>
  );
}
