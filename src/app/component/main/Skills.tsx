"use client";

const STACK_GROUPS = [
  {
    label: "AI / Agents",
    items: [
      "OpenAI Agents SDK",
      "LangGraph",
      "LangChain",
      "CrewAI",
      "Vector DBs (Pinecone, pgvector, Qdrant)",
      "RAG · Evals · Observability",
      "Anthropic Claude · OpenAI · Gemini",
    ],
  },
  {
    label: "Cloud & Backend",
    items: [
      "AWS · GCP · Vercel · Cloudflare",
      "Python · FastAPI · Node",
      "PostgreSQL · Redis · Supabase",
      "Docker · Terraform · GitHub Actions",
      "Edge functions · Queues · Cron",
    ],
  },
  {
    label: "Product & Frontend",
    items: [
      "Next.js · React · TypeScript",
      "Tailwind · shadcn/ui · Framer Motion",
      "Stripe · Auth.js · Clerk",
      "Sanity · MDX · Notion API",
      "Figma · Linear · Vercel Analytics",
    ],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="relative py-28 lg:py-36 border-t border-border">
      <div className="max-w-container mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">
              <span className="dot" /> 04 · Stack
            </div>
            <h2 className="display-h2 mt-5 text-balance">
              The tools I reach for{" "}
              <span className="display-italic text-text-secondary">first.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-text-secondary leading-relaxed">
              Not a checklist. A working stack chosen for speed, reliability,
              and shipping odds. I&apos;m happy to use whatever your team is
              standardised on.
            </p>
          </div>
        </div>

        {/* Stack columns */}
        <div className="mt-14 grid md:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {STACK_GROUPS.map((g, i) => (
            <div
              key={g.label}
              className="bg-bg-card p-7 lg:p-8 hover:bg-bg-elevated transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="text-text-primary font-medium tracking-tight">
                  {g.label}
                </div>
                <div className="font-mono text-xs text-text-muted">
                  /0{i + 1}
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-text-secondary">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
