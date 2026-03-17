# Infinity Home Services CRM Platform Architecture

## Architecture Goals

The architecture should support:
- one shared platform for Infinity Home Services
- around 25 brands in the current operating model
- centralized reporting with brand-level execution
- very simple user experience despite multi-tenant complexity
- fast MVP delivery without locking the team into a rewrite later

## Recommended Architecture Direction

Use a shared application and shared database with tenant-aware data boundaries.

This means:
- one codebase
- one deployed application
- one primary relational database
- tenant-aware tables keyed by platform, brand, and office scope where appropriate
- role-aware routing and dashboards within the same product shell

This is the right MVP balance because it keeps the system simple to build and operate while still supporting the Infinity multi-brand model.

## Tenant Model

### Recommended Shape

- one `platform` record for Infinity Home Services
- many `brand_tenant` records under the platform
- many `office` records under each brand
- users scoped to platform, brand, or office access

### Why this model works

- platform leadership gets roll-up visibility
- brand teams retain local operational context
- the app can keep shared workflows and reporting standards
- the team avoids the cost and complexity of separate deployments per brand

### What to avoid

- one database per brand in MVP
- one deployed app per brand in MVP
- highly customized workflow logic per tenant
- custom schema branching per brand

## Frontend

### Recommendation

Continue with Next.js App Router and TypeScript in a single application shell.

### Frontend responsibilities

- render the Infinity platform shell
- show tenant-aware branding in context
- adapt navigation by role and access scope
- keep module screens simple and field-friendly
- support fast drill-down from platform to brand to office to rep

### Branding model

The shell should be Infinity-led, not brand-fragmented.

Recommended behavior:
- global shell always feels like one Infinity platform
- active brand context swaps in brand logo and rider content
- branding fields come from tenant metadata, not hard-coded themes
- keep theming shallow in MVP: logo, rider, and a small color accent set

### UX structure

Keep the interface consistent across all roles:
- top-level context indicator for current scope
- shallow left navigation
- primary dashboard page by role
- fast access to leads, appointments, opportunities, and jobs

## Backend

### Recommendation

Keep the backend inside the Next.js application for MVP.

Use:
- route handlers for APIs where needed
- server actions for form-heavy workflows
- a clean service layer for tenant-aware business logic

### Backend responsibilities

- enforce platform, brand, and office scoping
- apply role-based permissions
- manage workflow transitions
- compute reporting roll-ups
- keep funnel definitions consistent across the platform

### Tenant-aware business logic

The backend should always know:
- who the user is
- what scope they are acting in
- what tenant boundaries apply

This logic should live in shared services and authorization helpers, not scattered throughout UI components.

## Database

### Recommendation

Use PostgreSQL with Prisma and a shared schema.

### Core design rule

Most operational tables should include:
- `platform_id` when records must support direct platform roll-up
- `brand_tenant_id`
- `office_id` where office-level reporting matters

Not every table must carry every scope field, but reporting-critical entities should carry enough scope to avoid fragile joins and ambiguous ownership.

### Recommended core entities

- platform
- brand_tenant
- office
- user
- prospect
- contact
- property
- lead
- appointment
- opportunity
- job
- activity
- campaign

### Reporting-ready modeling guidance

- standardize funnel stage enums or controlled reference tables
- store appointment outcomes explicitly
- preserve timestamps for stage-changing events
- keep source and campaign attribution structured
- avoid making reporting depend on free-text fields
- model prospect state explicitly in data or lifecycle logic so early-funnel reporting stays trustworthy

### Marketing-automation readiness

The MVP does not need automation workflows yet, but the model should be ready for them.

Add support for:
- prospect intake channel
- lead source
- source detail
- campaign linkage
- lifecycle stage
- status timestamps where meaningful

That gives a clean base for future nurture, attribution, and conversion analysis.

## Auth

### Recommendation

Use Clerk for authentication speed, but keep authorization in the app database.

### Why

- fastest route to secure sign-in and session management
- easy support for internal users across many brands
- lower maintenance than building auth from scratch

### Authorization model

Store user role and scope in the application database.

Recommended access dimensions:
- role: platform admin, brand manager, office manager, sales rep
- scope level: platform, brand, office
- scope ids: brand tenant id and optional office id

This keeps permissions practical without building a heavy policy system.

## Storage

### Recommendation

Use Supabase Storage or S3-compatible storage behind a simple abstraction layer.

### MVP use cases

- logo files for brands
- appointment or property photos
- estimate and job attachments

Keep file references tenant-aware so uploads can be partitioned by brand and office where useful.

## Reporting and Dashboard Architecture

### Recommended hierarchy

1. Platform dashboard
2. Brand dashboard
3. Office dashboard
4. Rep dashboard

### Recommended reporting approach

For MVP:
- start with live query-based reporting for current-period dashboards
- create reusable aggregation queries by scope
- keep metric definitions centralized in code and docs

For later:
- add summary tables or scheduled aggregation jobs only when performance requires them

### Core metric groups

- prospect counts
- gross lead counts
- qualified lead counts
- lead-to-appointment conversion
- appointments set
- appointments cancelled
- demoed appointments
- opportunity pipeline counts
- sold jobs and sold value

### KPI logic guidance

For MVP:
- define one shared source of truth for each metric in application logic
- use the same metric definitions at every reporting scope
- avoid tenant-specific KPI formulas
- keep the first reporting layer query-driven and understandable

Later:
- move repeated calculations into summary tables only when dashboard performance requires it

## Local Development Setup

### Recommendation

Keep local development straightforward:

- Next.js app
- Prisma
- local `.env`
- local or managed development Postgres

### Suggested setup

1. Install app dependencies.
2. Configure `.env`.
3. Connect to a Postgres database.
4. Run Prisma generate and migrations.
5. Seed a small sample data set with one platform, a few brands, offices, managers, and reps.
6. Start the Next.js dev server.

### Why this matters

Multi-tenant software becomes much easier to reason about when local seed data includes realistic scope examples.

## Deployment Recommendation

### MVP recommendation

- app on Vercel
- Postgres on Neon or Supabase
- auth with Clerk
- storage with Supabase Storage or S3-compatible storage

### Why

- fast deployment cycle
- low DevOps burden
- strong support for a TypeScript monolith
- simple path to preview environments and staged rollout

## Tradeoffs

### Shared app and shared database

Pros:
- fastest to build and maintain
- easiest way to support standardized reporting
- lower operational cost

Cons:
- tenant isolation depends on application discipline
- reporting queries must be designed carefully from the start

### Separate tenant infrastructure

Pros:
- stronger isolation
- more tenant-specific customization

Cons:
- much more operational overhead
- harder platform-wide reporting
- unnecessary complexity for MVP

### Recommendation

Choose the shared platform model now. Add stronger isolation patterns later only if customer count, compliance needs, or brand customization actually require it.

## Practical MVP Recommendation

Build the first version as:

- one Next.js application
- one shared Postgres database
- tenant-aware Prisma schema
- centralized metric definitions
- Infinity-led shell with brand context support
- role-based navigation and dashboards

This keeps the first version practical while leaving a clean path for future scale, automation, and richer tenant capabilities.
