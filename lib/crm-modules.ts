export type AppRole = "platform_admin" | "brand_leader" | "rep";

export const primaryNav = [
  {
    title: "Dashboard",
    href: "/dashboard",
    description: "Platform and brand performance snapshots.",
  },
  {
    title: "Leads",
    href: "/leads",
    description: "Prospects, gross leads, and qualified leads.",
  },
  {
    title: "Appointments",
    href: "/appointments",
    description: "Set, cancelled, and demoed appointment flow.",
  },
  {
    title: "Opportunities",
    href: "/opportunities",
    description: "Pipeline progression and value tracking.",
  },
  {
    title: "Jobs",
    href: "/jobs",
    description: "Post-sale handoff and execution visibility.",
  },
  {
    title: "Customers",
    href: "/customers",
    description: "Contacts and properties across brands.",
  },
  {
    title: "Reports",
    href: "/reports",
    description: "Platform, brand, office, and rep reporting.",
  },
  {
    title: "Admin",
    href: "/admin",
    description: "Brand structure, users, and system controls.",
  },
] as const;

export const roleNavMap: Record<AppRole, string[]> = {
  platform_admin: [
    "Dashboard",
    "Leads",
    "Appointments",
    "Opportunities",
    "Jobs",
    "Customers",
    "Reports",
    "Admin",
  ],
  brand_leader: [
    "Dashboard",
    "Leads",
    "Appointments",
    "Opportunities",
    "Jobs",
    "Customers",
    "Reports",
  ],
  rep: ["Dashboard", "Leads", "Appointments", "Opportunities", "Jobs", "Customers"],
};

export const roleProfiles = {
  platform_admin: {
    label: "Platform Admin",
    guidance: "Oversees Infinity standards, brands, reporting, and KPI logic.",
    homeLabel: "Platform roll-up",
  },
  brand_leader: {
    label: "Brand Leader",
    guidance: "Runs local brand performance, offices, and team execution.",
    homeLabel: "Brand execution",
  },
  rep: {
    label: "Rep",
    guidance: "Works assigned leads, appointments, opportunities, and jobs.",
    homeLabel: "Field workflow",
  },
} as const;

export const demoContexts = [
  {
    label: "Infinity Platform",
    detail: "All 25 brands",
    rider: "Shared standards and KPI logic",
  },
  {
    label: "North Crest Roofing",
    detail: "Brand workspace",
    rider: "Premium exterior solutions",
  },
  {
    label: "North Crest Roofing / Tampa",
    detail: "Office workspace",
    rider: "Local sales and appointment execution",
  },
] as const;
