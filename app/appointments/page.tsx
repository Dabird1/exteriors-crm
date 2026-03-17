import { AppShell } from "@/components/app-shell";
import { ModulePage } from "@/components/module-page";

export default function AppointmentsPage() {
  return (
    <AppShell role="rep" activeContextLabel="North Crest Roofing / Tampa">
      <ModulePage
        title="Appointments"
        description="This workspace will support the key Infinity appointment funnel: set, cancelled, and demoed. The module is positioned as a field-friendly rep and office workflow, not a generic calendar feature."
        scopeSummary="Primary scope: office scheduling and rep execution"
        roleSummary="Rep-friendly with office and brand-level oversight"
        nextItems={[
          "Represent set, cancelled, and demoed status clearly",
          "Make mobile updates extremely fast",
          "Prepare appointment-to-opportunity conversion",
        ]}
      />
    </AppShell>
  );
}
