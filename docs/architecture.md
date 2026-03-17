# Exteriors CRM Architecture

## Goals

The architecture should optimize for:
- fast MVP delivery
- low operational overhead
- strong TypeScript support
- easy local development
- a clean path to grow without a rewrite

## Recommended Stack

The best fit for this project is:

- Frontend and backend: Next.js with TypeScript
- UI: React with a lightweight component approach
- Database: PostgreSQL
- ORM: Prisma
- Auth: Clerk or Supabase Auth
- Storage: Supabase Storage or S3-compatible object storage
- Deployment: Vercel for the app, managed Postgres for data

### Why this stack

This stack is fast to build with, widely adopted, and simple for a small team. It keeps one TypeScript codebase for UI and server logic, gives a strong developer experience, and can scale comfortably through MVP and early growth.

## Frontend

### Recommendation

Use Next.js App Router with TypeScript.

### Why

- supports fast iteration for both web app pages and server actions
- keeps routing, layouts, and data-loading patterns organized
- works well for mobile-friendly internal tools
- minimizes project setup and integration overhead

### Frontend Structure

A practical app structure would be:

- `app/`
- `components/`
- `lib/`
- `prisma/`
- `public/`
- `styles/`

### UI Guidance

- prioritize forms, lists, detail views, and timelines over flashy UI
- design for tablet and phone usage first, then desktop enhancement
- keep navigation shallow and business-oriented
- use server-rendered pages where possible and client components only where needed

## Backend

### Recommendation

Keep the backend inside the Next.js application for MVP.

Use:
- route handlers for API endpoints
- server actions where they simplify form-driven workflows
- a service layer in `lib/` for business logic

### Why

- avoids maintaining a separate API server too early
- keeps deployment and local setup simple
- reduces duplicated types and API contracts

### Backend Responsibilities

- CRUD for leads, contacts, properties, inspections, opportunities, jobs, and activities
- auth checks and role-based access
- dashboard aggregations
- file upload coordination
- validation and workflow transitions

## Database

### Recommendation

Use PostgreSQL with Prisma.

### Why

- relational data fits the CRM domain well
- Prisma accelerates schema changes and query development
- Postgres scales well for this workload and is easy to host in managed environments

### Database Design Principles

- use normalized core entities
- keep audit-friendly timestamps on all major records
- use enums carefully for statuses that are unlikely to change often
- prefer explicit foreign keys over polymorphic complexity except where a simple activity pattern justifies it

### Initial Core Tables

- users
- leads
- contacts
- properties
- inspections
- opportunities
- jobs
- activities

## Auth

### Recommendation

Use Clerk if the priority is the fastest polished auth setup.

Use Supabase Auth if you want tighter bundling with database and storage.

### Preferred Choice

Clerk is the best default recommendation for fast development because it simplifies login, session management, protected routes, and user management with minimal setup.

### MVP Auth Requirements

- email/password or magic link sign-in
- protected app routes
- role assignment for sales rep, office admin, and manager
- simple user activation/deactivation

For authorization, store the app role in the database and enforce it in server-side business logic.

## Storage

### Recommendation

Use Supabase Storage first unless the team already has AWS preferences.

### Why

- simple setup
- low operational burden
- works well for inspection photos and attachments
- easy to replace later with S3-compatible storage if needed

### MVP Storage Use Cases

- inspection photos
- estimate attachments
- basic job documents

Keep storage concerns isolated behind helper functions so the app is not tightly coupled to one provider.

## Local Development Setup

### Recommendation

Use a straightforward local setup:

- Node.js LTS
- `npm` for package management
- local `.env`
- Prisma migrations
- local Next.js app
- either local Postgres via Docker or a managed dev database

### Suggested Developer Flow

1. Install dependencies.
2. Copy `.env.example` to `.env`.
3. Start or connect to Postgres.
4. Run Prisma migrations.
5. Seed basic users and statuses if needed.
6. Start the Next.js dev server.

### Initial Files to Add

- `package.json`
- `tsconfig.json`
- `.gitignore`
- `.env.example`
- `next.config.ts`
- `prisma/schema.prisma`

## Deployment Recommendation

### Best MVP Deployment

- App: Vercel
- Database: Neon or Supabase Postgres
- Storage: Supabase Storage
- Auth: Clerk

### Why

- lowest friction for shipping quickly
- excellent support for Next.js
- minimal DevOps burden
- easy preview deployments for iterative product work

### Scaling Path

This setup can comfortably support MVP and early production. If scale or customization needs grow later, the database can remain Postgres while the app can evolve into separate services only when justified by actual complexity.

## Tradeoffs

### Next.js Monolith

Pros:
- fast to build
- single codebase
- shared types across frontend and backend
- easier onboarding

Cons:
- can become messy if business logic is not kept organized
- less separation than a dedicated API service

### Prisma

Pros:
- fast schema iteration
- strong TypeScript ergonomics
- developer-friendly migrations

Cons:
- some advanced SQL patterns may eventually need raw queries

### Clerk

Pros:
- quickest route to production-ready auth
- polished user/session flows
- less auth maintenance

Cons:
- adds a third-party dependency
- some teams prefer all-in-one auth inside their database platform

### Supabase Storage

Pros:
- simple and practical
- good fit for MVP file handling
- lower setup overhead than full AWS

Cons:
- less flexible than a custom storage stack
- teams already invested in AWS may prefer S3 directly

## What to Avoid Right Now

- separate frontend and backend repos
- microservices
- event buses or queue-heavy design before proven need
- overly abstract domain layers
- premature multi-tenant architecture
- heavy admin frameworks that constrain the product UX

## Practical Recommendation

If we were starting implementation next, I would build:

- Next.js + TypeScript app
- Prisma + Postgres data layer
- Clerk for auth
- Supabase Storage for files
- Vercel deployment

That gives the fastest path to a clean MVP while keeping a solid scaling path for future modules and higher usage.
