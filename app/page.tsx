import { AppShell } from "@/components/app-shell";
import { ModuleCard } from "@/components/module-card";
import { primaryNav, roleProfiles } from "@/lib/crm-modules";

export default function HomePage() {
  return (
    <AppShell role="platform_admin" activeContextLabel="Infinity Platform">
      <section className="hero">
        <span className="eyebrow">Infinity-First Foundation</span>
        <h1>Multi-brand CRM platform scaffold</h1>
        <p>
          This foundation is now aligned around the Infinity platform model:
          one shared shell, tenant-aware records, brand context switching, and
          role-aware navigation for platform admins, brand leaders, and reps.
        </p>
        <div className="pill-row">
          <span className="pill">25-brand ready</span>
          <span className="pill">Platform, brand, office, rep reporting</span>
          <span className="pill">Prepared for future marketing automation</span>
        </div>
        <div className="hero-grid">
          {Object.values(roleProfiles).map((profile) => (
            <article key={profile.label} className="card">
              <h2>{profile.label}</h2>
              <p>{profile.guidance}</p>
            </article>
          ))}
        </div>
        <div className="grid">
          {primaryNav.map((module) => (
            <ModuleCard
              key={module.href}
              href={module.href}
              title={module.title}
              description={module.description}
            />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
