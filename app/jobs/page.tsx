import { AppShell } from "@/components/app-shell";
import { ModulePage } from "@/components/module-page";

export default function JobsPage() {
  return (
    <AppShell role="brand_leader" activeContextLabel="North Crest Roofing / Tampa">
      <ModulePage
        title="Jobs"
        description="This module will become the lightweight operational handoff layer from won opportunity into job execution, while staying simple and visibility-focused in the MVP."
        scopeSummary="Primary scope: brand and office post-sale tracking"
        roleSummary="Visible to brand leaders, office managers, and reps as needed"
        nextItems={[
          "Show job status by office and owner",
          "Keep post-sale tracking intentionally light",
          "Prepare sold value reporting and completion milestones",
        ]}
      />
    </AppShell>
  );
}
