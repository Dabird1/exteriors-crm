type ModulePageProps = {
  title: string;
  description: string;
  nextItems: string[];
  scopeSummary: string;
  roleSummary: string;
};

export function ModulePage({
  title,
  description,
  nextItems,
  scopeSummary,
  roleSummary,
}: ModulePageProps) {
  return (
    <section className="panel">
      <div className="panel-head">
        <span className="eyebrow">Platform-Aware Placeholder</span>
        <div className="panel-meta">
          <span>{scopeSummary}</span>
          <span>{roleSummary}</span>
        </div>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul className="list">
        {nextItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
