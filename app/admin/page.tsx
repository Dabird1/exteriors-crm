import { AppShell } from "@/components/app-shell";
import { ModulePage } from "@/components/module-page";

export default function AdminPage() {
  return (
    <AppShell role="platform_admin" activeContextLabel="Infinity Platform">
      <ModulePage
        title="Admin"
        description="This admin placeholder is for platform and tenant structure management rather than a generic settings dump. It will eventually support brands, offices, users, shell branding, and platform standards."
        scopeSummary="Primary scope: platform control with brand-level flexibility"
        roleSummary="Platform-admin oriented"
        nextItems={[
          "Manage brand tenants and offices",
          "Manage user roles and scope assignments",
          "Configure brand logo and rider placeholders",
        ]}
      />
    </AppShell>
  );
}
