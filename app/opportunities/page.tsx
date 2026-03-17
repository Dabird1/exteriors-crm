import { AppShell } from "@/components/app-shell";
import { ModulePage } from "@/components/module-page";

export default function OpportunitiesPage() {
  return (
    <AppShell role="brand_leader" activeContextLabel="North Crest Roofing">
      <ModulePage
        title="Opportunities"
        description="This pipeline placeholder is now framed as a brand-aware sales workspace that converts qualified, demoed activity into clear revenue opportunities and eventual jobs."
        scopeSummary="Primary scope: brand pipeline with office and rep filters"
        roleSummary="Visible to brand leaders and reps within scope"
        nextItems={[
          "Add stage-based opportunity grouping",
          "Link opportunities back to appointments and properties",
          "Prepare won opportunity conversion into jobs",
        ]}
      />
    </AppShell>
  );
}
