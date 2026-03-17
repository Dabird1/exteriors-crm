import Link from "next/link";
import {
  demoContexts,
  primaryNav,
  roleNavMap,
  roleProfiles,
  type AppRole,
} from "@/lib/crm-modules";

type AppShellProps = {
  children: React.ReactNode;
  role?: AppRole;
  activeContextLabel?: string;
};

export function AppShell({
  children,
  role = "platform_admin",
  activeContextLabel = "Infinity Platform",
}: AppShellProps) {
  const visibleNav = primaryNav.filter((item) =>
    roleNavMap[role].includes(item.title),
  );
  const activeContext =
    demoContexts.find((context) => context.label === activeContextLabel) ??
    demoContexts[0];

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <p className="brand-kicker">Infinity Home Services</p>
          <h1 className="sidebar-title">Platform CRM</h1>
          <p className="sidebar-copy">
            Calm, brand-aware operations for leads, appointments, revenue, and
            reporting.
          </p>
        </div>

        <section className="context-panel" aria-label="Tenant context">
          <p className="panel-label">Current Context</p>
          <button className="context-button" type="button">
            <span>{activeContextLabel}</span>
            <span className="context-muted">Switch brand</span>
          </button>
          <p className="context-rider">{activeContext.rider}</p>
          <div className="context-list">
            {demoContexts.map((context) => (
              <div
                key={context.label}
                className={
                  context.label === activeContextLabel
                    ? "context-item context-item-active"
                    : "context-item"
                }
              >
                <strong>{context.label}</strong>
                <span>{context.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="context-panel" aria-label="Role preview">
          <p className="panel-label">Role View</p>
          <div className="role-chip">{roleProfiles[role].label}</div>
          <p className="role-copy">{roleProfiles[role].guidance}</p>
        </section>

        <nav className="nav-list" aria-label="Primary navigation">
          {visibleNav.map((module) => (
            <Link key={module.href} className="nav-link" href={module.href}>
              <strong>{module.title}</strong>
              <span>{module.description}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="panel-label">Infinity Platform Shell</p>
            <h2 className="topbar-title">{activeContextLabel}</h2>
          </div>
          <div className="topbar-badge">
            {roleProfiles[role].homeLabel} | {activeContext.rider}
          </div>
        </header>
        {children}
      </section>
    </main>
  );
}
