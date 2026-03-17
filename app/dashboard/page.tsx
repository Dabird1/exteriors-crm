import { AppShell } from "@/components/app-shell";
import { ModulePage } from "@/components/module-page";

export default function DashboardPage() {
  return (
    <AppShell role="platform_admin" activeContextLabel="Infinity Platform">
      <ModulePage
        title="Dashboard"
        description="This dashboard foundation is meant to support platform roll-up reporting first, then brand, office, and rep drill-downs. It will become the home for Infinity KPI logic across prospects, leads, appointments, opportunities, and jobs."
        scopeSummary="Primary scope: platform to rep reporting hierarchy"
        roleSummary="Visible to platform admins, brand leaders, and reps with scoped views"
        nextItems={[
          "Add KPI summary cards for prospect, gross lead, and qualified lead",
          "Add appointment set, cancelled, and demoed reporting",
          "Add platform-to-brand drill-down patterns",
        ]}
      />
    </AppShell>
  );
}
