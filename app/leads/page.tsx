import { AppShell } from "@/components/app-shell";
import { ModulePage } from "@/components/module-page";

export default function LeadsPage() {
  return (
    <AppShell role="brand_leader" activeContextLabel="North Crest Roofing">
      <ModulePage
        title="Leads"
        description="This workspace will manage the early Infinity funnel from prospect to gross lead to qualified lead, while preserving brand and office context for routing, reporting, and ownership."
        scopeSummary="Primary scope: brand and office lead operations"
        roleSummary="Role-aware for brand leaders and reps"
        nextItems={[
          "Show prospect and lead lifecycle clearly",
          "Support owner assignment by office and rep",
          "Prepare lead detail for appointment scheduling",
        ]}
      />
    </AppShell>
  );
}
