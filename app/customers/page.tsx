import { AppShell } from "@/components/app-shell";
import { ModulePage } from "@/components/module-page";

export default function CustomersPage() {
  return (
    <AppShell role="brand_leader" activeContextLabel="North Crest Roofing">
      <ModulePage
        title="Customers"
        description="This placeholder groups contacts and properties under a clearer business-facing label. It will support customer records shared across prospect, lead, appointment, opportunity, and job workflows."
        scopeSummary="Primary scope: shared customer and property records"
        roleSummary="Accessible across brand and rep workflows"
        nextItems={[
          "Combine contact and property visibility cleanly",
          "Keep customer records searchable and simple",
          "Link every major workflow back to shared customer context",
        ]}
      />
    </AppShell>
  );
}
