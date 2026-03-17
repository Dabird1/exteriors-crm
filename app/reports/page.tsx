import { AppShell } from "@/components/app-shell";
import { ModulePage } from "@/components/module-page";

export default function ReportsPage() {
  return (
    <AppShell role="platform_admin" activeContextLabel="Infinity Platform">
      <ModulePage
        title="Reports"
        description="This placeholder defines reporting as a platform capability first. It will support consistent KPI logic and roll-up reporting across platform, brand, office, and rep levels."
        scopeSummary="Primary scope: centralized KPI logic and roll-up reporting"
        roleSummary="Most complete view for platform admins, scoped drill-down for brand leaders"
        nextItems={[
          "Standardize metric definitions in one reporting layer",
          "Add platform, brand, office, and rep views",
          "Prepare live query-based KPI cards for MVP",
          "Keep funnel logic auditable with timestamped status changes",
        ]}
      />
    </AppShell>
  );
}
