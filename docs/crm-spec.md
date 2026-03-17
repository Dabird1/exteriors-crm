# Infinity Home Services CRM Platform MVP Spec

## Purpose

This product is a multi-brand CRM platform for Infinity Home Services. It should support centralized platform oversight across roughly 25 brands while still feeling simple, local, and field-friendly inside each brand operation.

The MVP should help Infinity standardize lead handling, appointment flow, sales visibility, and reporting without creating a heavy enterprise system.

## Product Direction

The product should behave like one platform with many brand workspaces.

- Infinity Home Services is the parent platform
- each brand operates as its own tenant with its own users, branding, and daily workflow context
- offices live under a brand
- reps work inside offices and brands
- leadership can report across the full platform or drill down to brand, office, and rep performance

This is a practical "mama / baby" model:

- the "mama" platform provides shared standards, central visibility, and core system control
- the "baby" brand workspaces provide local execution, identity, and user context

## Product Goals

- provide extremely simple CRM workflows for field and office teams
- support multi-brand operations without making the UI feel enterprise-heavy
- create consistent funnel definitions across all Infinity brands
- support roll-up reporting from platform to brand to office to rep
- establish a data model that is ready for future marketing automation and attribution

## Design Priorities

- Apple-simple UX and information density
- mobile-friendly and field-friendly by default
- fast data entry with minimal clicks
- clear hierarchy: platform, brand, office, rep
- business-friendly naming over technical jargon
- shared system foundation with brand-level identity and flexibility

## Primary Users

### Platform Admin

Uses the system to:
- manage platform-wide settings and standards
- view roll-up reporting across all brands
- compare brand and office performance
- manage shared definitions for funnel stages and reporting rules

### Brand Manager

Uses the system to:
- manage local users, offices, and operational visibility within a brand
- track brand-level funnel performance
- monitor lead flow, appointments, and sales progression
- ensure brand-level execution follows platform standards

### Office Manager / Coordinator

Uses the system to:
- intake or assign leads
- schedule and reschedule appointments
- monitor office performance and rep activity
- support local day-to-day execution

### Sales Rep

Uses the system to:
- work assigned prospects and leads
- view upcoming appointments
- log outcomes quickly from the field
- move records through the sales funnel
- keep notes and next steps current

## Multi-Tenant MVP Scope

The MVP should support:

- one parent platform record for Infinity
- many brand tenants
- one or more offices per brand
- users assigned to a brand and optionally scoped to an office
- shared global product logic with tenant-aware data access
- brand-aware shell styling with Infinity-led structure

The MVP should not yet support:

- deep tenant-by-tenant configuration engines
- custom schemas per brand
- highly flexible permission builders
- fully custom workflows per brand

## Funnel Definitions and Core Metrics

The funnel must support standardized definitions across the platform.

### Prospect

A person or household that has entered the system but has not yet been validated as a true lead.

### Gross Lead

A lead that has been captured and counted as a raw inbound or outbound opportunity source.

### Qualified Lead

A lead that meets minimum business criteria for active pursuit.

### Lead-to-Appointment Conversion

The percentage of qualified or active leads that become scheduled appointments.

### Appointments Set

Appointments created and scheduled for a rep or office.

### Appointments Cancelled

Appointments that were scheduled but canceled before the demo or visit occurred.

### Demoed Appointments

Appointments that were completed and meaningfully worked by the rep in the field.

## Recommended MVP Reporting Hierarchy

Reporting should roll up through a strict hierarchy:

1. Platform
2. Brand
3. Office
4. Rep

This hierarchy should drive both dashboards and permissions.

### Platform Dashboard

Shows:
- total funnel counts across all brands
- brand comparisons
- office rankings
- rep rankings
- trend lines by week and month

### Brand Dashboard

Shows:
- brand funnel performance
- office comparisons within the brand
- rep productivity and conversion
- appointment and close flow

### Office Dashboard

Shows:
- office lead volume
- appointment set, cancelled, and demoed counts
- rep-level performance
- current pipeline health

### Rep Dashboard

Shows:
- assigned prospects and leads
- upcoming appointments
- appointment outcomes
- personal conversion and activity metrics

## Recommended Entity Model

The entity model should stay relational, tenant-aware, and marketing-ready without becoming over-abstracted.

### Platform

Represents Infinity Home Services as the parent organization.

Suggested fields:
- id
- name
- slug
- active
- created_at
- updated_at

### BrandTenant

Represents one operating brand under Infinity.

Suggested fields:
- id
- platform_id
- name
- slug
- legal_name
- active
- logo_url
- rider_text
- primary_color
- support_email
- support_phone
- created_at
- updated_at

### Office

Represents a physical office or operational unit within a brand.

Suggested fields:
- id
- brand_tenant_id
- name
- code
- active
- timezone
- address fields
- created_at
- updated_at

### User

Represents a person using the system.

Suggested fields:
- id
- brand_tenant_id
- office_id nullable
- first_name
- last_name
- email
- role
- title
- active
- created_at
- updated_at

Users belong to a brand. Some users also belong to a specific office. Platform admins can be stored either as platform-scoped users or as users with platform-level role access. For MVP simplicity, use one users table with scope fields and role rules.

### Prospect

Represents the earliest funnel record before a record is counted as a gross lead.

Suggested fields:
- id
- platform_id
- brand_tenant_id
- office_id nullable
- owner_user_id nullable
- source
- source_detail
- campaign_id nullable
- intake_channel
- status
- contact_id nullable
- property_id nullable
- created_at
- updated_at

Recommendation:
- keep `prospect` as a first-class lifecycle stage or lightweight record type in the data model
- if implementation simplicity matters more in the first version, a single lead table with `lifecycle_stage = PROSPECT` is acceptable
- the product language and reporting layer must still preserve the distinction between prospect and gross lead

### Lead

Represents the main funnel record for prospect through active selling.

Suggested fields:
- id
- platform_id
- brand_tenant_id
- office_id nullable
- owner_user_id nullable
- lead_number
- source
- source_detail
- campaign_id nullable
- lifecycle_stage
- lead_status
- qualification_status
- service_type
- property_id
- primary_contact_id
- created_at
- updated_at

### Appointment

Use `appointment` as the business-friendly term rather than `inspection` in reporting and navigation.

Suggested fields:
- id
- brand_tenant_id
- office_id
- lead_id
- assigned_user_id nullable
- scheduled_at
- status
- appointment_type
- result
- cancelled_reason nullable
- demoed_at nullable
- created_at
- updated_at

### Opportunity

Represents the sales opportunity that follows a qualified appointment.

Suggested fields:
- id
- brand_tenant_id
- office_id
- lead_id
- appointment_id nullable
- owner_user_id nullable
- stage
- estimated_value
- close_date nullable
- lost_reason nullable
- created_at
- updated_at

### Job

Represents the post-sale execution record.

Suggested fields:
- id
- brand_tenant_id
- office_id
- opportunity_id
- owner_user_id nullable
- status
- sold_value
- job_type
- start_date nullable
- completed_at nullable
- created_at
- updated_at

### Marketing-Ready Supporting Entities

To stay ready for future marketing automation, do not overload the lead table with all attribution logic. Add simple support for:

- `campaign`
- `lead_source`
- `activity`
- `contact`
- `property`

The MVP does not need full automation flows yet, but the model should preserve source, campaign, touchpoint, and status history cleanly.

### Activity

Represents notes, tasks, calls, texts, and simple customer touchpoints attached to a record.

Suggested fields:
- id
- brand_tenant_id
- office_id nullable
- user_id
- related_entity_type
- related_entity_id
- activity_type
- subject
- body
- due_at nullable
- completed_at nullable
- created_at

Recommendation:
- keep activity flexible enough to attach to prospect, lead, appointment, opportunity, or job
- standardize activity types early so reporting can later analyze follow-up behavior

## Recommended Data Modeling Rules

- every operational record should carry `brand_tenant_id`
- records that are office-specific should also carry `office_id`
- reporting-critical records should preserve point-in-time status dates where practical
- central reporting definitions should be standardized by the platform, not reinvented per brand
- branding should be data-driven, not hard-coded per tenant
- funnel stages should be business-defined and shared across the platform
- reporting logic should distinguish record lifecycle state from operational workflow state

## Core MVP Workflows

### 1. Prospect and Lead Intake

1. A prospect enters the system.
2. The record is assigned to a brand and optionally an office.
3. It is reviewed and promoted into gross lead and then qualified lead status when appropriate.
4. Ownership is assigned to a rep or office queue.

### 2. Appointment Setting

1. A qualified lead is scheduled for an appointment.
2. The appointment is assigned to a rep.
3. Appointment status is tracked as set, cancelled, or demoed.
4. Funnel metrics update automatically from the appointment outcome.

### 3. Opportunity Flow

1. A demoed or otherwise progressed appointment can create an opportunity.
2. The opportunity moves through clear sales stages.
3. The system tracks estimated value, stage, and owner.

### 4. Job Conversion

1. A won opportunity converts to a job.
2. Core lead, contact, property, and brand context carry forward.
3. Jobs support lightweight production visibility in the MVP.

## KPI and Funnel Hierarchy

The MVP should standardize funnel logic at the platform level so all brands report from the same definitions.

### Recommended Funnel Order

1. Prospect
2. Gross Lead
3. Qualified Lead
4. Appointment Set
5. Demoed Appointment
6. Opportunity
7. Won Opportunity
8. Job

### High-Level Metric Logic

#### Prospect

Count of newly captured records before qualification into the active lead funnel.

#### Gross Lead

Count of records that have entered the official lead funnel, regardless of quality.

#### Qualified Lead

Count of leads that pass the minimum business criteria for active sales pursuit.

#### Lead-to-Appointment Conversion

Recommended logic:
- numerator: leads with at least one appointment set
- denominator: qualified leads, or gross leads if Infinity wants a broader conversion view

For clarity in MVP, choose one official denominator and use it platform-wide.

#### Appointments Set

Count of appointments scheduled during the reporting period.

#### Appointments Cancelled

Count of scheduled appointments later moved to cancelled status.

#### Demoed Appointments

Count of appointments completed in a meaningful sales context.

### KPI Modeling Guidance

- metric definitions should be centralized by the platform
- dashboards should show counts first and conversion rates second
- all KPI logic should support roll-up by platform, brand, office, and rep
- a lead or appointment should never count differently by tenant unless Infinity changes the shared global definition
- preserve timestamped status changes so metrics can later be audited and recalculated

## MVP Modules

### Platform Reporting

- platform roll-up dashboard
- brand comparison and drill-down
- office and rep performance visibility

### Lead Management

- prospect, gross lead, and qualified lead tracking
- owner assignment
- brand and office routing

### Appointments

- scheduling and assignment
- set, cancelled, and demoed status handling
- rep-facing appointment visibility

### Opportunities

- simple stage-based pipeline
- owner and value tracking
- conversion to job

### Jobs

- post-sale handoff visibility
- high-level status tracking

### Contacts and Properties

- customer and address records shared across the funnel

### Activities

- notes, call logs, and follow-up events

### Branding Shell

- Infinity-branded application shell
- brand logo and rider support in-context

## Roles and Permissions

Keep permissions role-based and scope-based.

### Platform Admin

- full platform visibility
- manage brands, offices, and global reporting definitions
- access every dashboard level

### Brand Manager

- full visibility within assigned brand
- manage users and offices within brand
- review brand, office, and rep reporting inside that brand

### Office Manager

- visibility within assigned office
- manage scheduling and assignment for local users
- track local funnel and rep execution

### Sales Rep

- access assigned records and local context
- update appointment and opportunity outcomes
- view personal dashboard and relevant office context

## Key Screens

### Platform Home

- Infinity summary view
- brand comparison cards
- quick drill-down into brand dashboards

### Brand Home

- local funnel summary
- office leaderboard
- upcoming appointments
- active opportunities

### Lead Workspace

- simple list with sharp filters
- clear stage and owner visibility
- fast actions for qualify, assign, and schedule

### Appointment Workspace

- schedule list
- rep assignments
- status updates for set, cancelled, and demoed

### Opportunity Workspace

- simple pipeline board or grouped list
- stage changes without clutter

### Job Workspace

- lightweight post-sale status view

## Navigation Recommendation

Navigation should adapt by role while staying visually consistent.

### Platform Admin Navigation

- Home
- Brands
- Reporting
- Leads
- Appointments
- Opportunities
- Jobs
- Users
- Settings

### Brand Manager Navigation

- Home
- Leads
- Appointments
- Opportunities
- Jobs
- Offices
- Team
- Reporting

### Sales Rep Navigation

- Home
- My Leads
- My Appointments
- My Opportunities
- My Jobs
- Activity

### Brand Leader Navigation

Use the same primary model as brand manager for MVP.

- Home
- Leads
- Appointments
- Opportunities
- Jobs
- Offices
- Team
- Reporting

## Open Questions

- Should platform admins be able to edit brand-level operational data directly, or mostly observe and configure?
- Do brands need separate pipeline naming, or should all funnel definitions stay standardized across Infinity?
- Will lead routing begin as manual assignment, round-robin, or simple office queueing?
- Does each rep belong to a single office in MVP, or can reps work across offices?
- Are platform-wide benchmark targets needed in MVP dashboards, or only raw metrics and comparisons?
- Should the first version support one logo plus a rider line per brand, or broader theming options?
