# Infinity Home Services CRM Platform

This repository contains the scaffold for a multi-brand CRM platform for Infinity Home Services.

The current foundation is intentionally light, but it is now aligned to the Infinity platform model:
- one shared Infinity platform shell
- brand-aware tenant context
- office-aware operational records
- reporting designed to roll up from platform to brand to office to rep

The goal is to keep the MVP fast to build, business-friendly to understand, and ready for incremental feature work without overengineering.

## Current Stack

- Next.js with App Router
- TypeScript
- Prisma ORM
- PostgreSQL

The architecture direction is documented in [docs/architecture.md](docs/architecture.md), the product scope is documented in [docs/crm-spec.md](docs/crm-spec.md), and the UI/product direction is documented in [docs/design-principles.md](docs/design-principles.md).

## Project Structure

- `app/`
  Next.js routes and layouts for the Infinity platform shell and module placeholders
- `components/`
  Reusable UI building blocks for the Infinity-first shell and scaffold pages
- `lib/`
  Shared navigation, demo role profiles, and app metadata
- `prisma/`
  Tenant-aware Prisma schema and future migrations
- `docs/`
  Product, architecture, and design guidance

The shell is organized around a shared Infinity platform experience with brand-aware context, not separate per-brand applications.

## Included Placeholder Modules

- Dashboard
- Leads
- Appointments
- Opportunities
- Jobs
- Customers
- Reports
- Admin

These routes are intentionally lightweight placeholders so we can establish the Infinity-first platform structure before building real workflows.

## Platform-Aware Structure

The foundation is designed around these business levels:

- `Platform`
  Infinity Home Services as the parent platform
- `BrandTenant`
  each operating brand under Infinity
- `Office`
  local operating unit inside a brand
- `User`
  platform admin, brand leader, office manager, or rep

Operational records are being shaped to support:

- Prospect
- Lead
- Appointment
- Opportunity
- Job
- Activity
- Contact
- Property
- Campaign

This keeps the data model ready for future marketing automation and reporting without making the first version too heavy.

## Local Development

1. Copy `.env.example` to `.env`.
2. Set `DATABASE_URL` for your PostgreSQL instance.
3. Install dependencies with `npm install`.
4. Generate Prisma client with `npm run prisma:generate`.
5. Start the app with `npm run dev`.

If you are using Prisma migrations locally, run `npm run prisma:migrate`.

## Next Suggested Steps

- add the first tenant-aware Prisma migration
- seed realistic platform, brand, office, and user demo data
- build the Leads workflow around prospect, gross lead, and qualified lead stages
- add auth and scoped access handling

## Current Scaffold Highlights

- tenant-aware starter schema for platform, brand, office, users, and funnel records
- Infinity-first shell with placeholder context switching
- role-aware navigation for platform admins, brand leaders, and reps
- platform-shaped placeholder modules for reporting, leads, appointments, and admin

## Notes

- The current scaffold is intentionally simple.
- No full CRM features have been implemented yet.
- Naming and structure are kept business-friendly to support fast onboarding and maintainability.
- The app shell is now Infinity-first and brand-aware, but the context switcher and role behavior are still placeholder-level.
