import React from 'react';

type Props = {
  id?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, lead, children }: Props) {
  return (
    <section id={id} className="container py-16">
      <h2 className="text-3xl md:text-4xl font-black mb-3">{title}</h2>
      {lead ? <p className="text-muted mb-8">{lead}</p> : null}
      <div>{children}</div>
    </section>
  );
}
