# Exteriors CRM MVP Spec

## Purpose

This product is a practical CRM for an exteriors home services company covering roofing, siding, windows, gutters, and solar. The MVP should help sales reps, office staff, and managers move work from lead capture to completed job with as little friction as possible.

The priority is speed, clarity, and field usability over broad feature coverage.

## Product Goals

- Capture and manage leads quickly
- Schedule inspections without extra back-and-forth
- Track the sales pipeline from first contact to signed job
- Convert won opportunities into jobs with a clean handoff
- Give management basic visibility into pipeline and production

## Primary Users

### Sales Rep

Uses the system in the field to:
- create leads
- view assigned leads and appointments
- update inspection outcomes
- create and manage opportunities
- add notes, photos, and next steps

### Office Admin / Coordinator

Uses the system to:
- intake leads from calls or web forms
- assign leads to reps
- schedule and reschedule inspections
- maintain customer and property records
- support job handoff and status updates

### Manager / Owner

Uses the system to:
- review pipeline health
- monitor rep activity
- track lead sources and conversion
- see jobs moving from sale to production

## Core MVP Workflows

### 1. Lead Intake

1. A lead is created manually or imported from a simple source.
2. The lead is assigned an owner and status.
3. The lead is linked to a contact and property.
4. A follow-up or inspection is scheduled.

### 2. Inspection Scheduling

1. A lead or contact is scheduled for an inspection appointment.
2. The assigned rep receives the appointment.
3. The inspection status is updated as scheduled, completed, canceled, or no-show.
4. Notes and outcomes are captured after the visit.

### 3. Opportunity / Estimate Flow

1. A completed inspection can create an opportunity.
2. The opportunity stores estimated job type, value range, and pipeline stage.
3. The rep updates the opportunity through stages such as new, inspected, estimating, sent, negotiating, won, or lost.
4. Notes and activities are attached throughout the process.

### 4. Job Conversion and Handoff

1. A won opportunity is converted into a job.
2. Core customer, property, and scope data carry forward automatically.
3. The job moves into production-oriented statuses.
4. Office or management users can track progress to completion.

### 5. Activity Tracking

1. Users log calls, texts, notes, visit outcomes, and follow-ups.
2. Activities are visible on the lead, contact, opportunity, and job timeline.
3. The system supports basic accountability and context sharing.

## MVP Modules

### Leads

- create, edit, assign, and status leads
- track source, owner, and next action
- search and filter lead lists

### Contacts / Customers

- store primary customer details
- support one or more contacts per property over time
- show linked leads, opportunities, jobs, and activities

### Properties

- store service address and property details
- link inspections, estimates, and jobs to a physical location

### Inspections / Appointments

- schedule and assign appointments
- track appointment status
- capture outcome notes from the field

### Opportunities / Estimates

- manage the sales pipeline
- track stage, projected value, and product category
- capture close-lost reasons

### Jobs / Production

- convert won opportunities to jobs
- track high-level production status
- provide handoff visibility without building a full operations suite yet

### Activities / Notes

- log customer interactions and internal notes
- maintain a simple timeline view across records

### Dashboard

- show counts by pipeline stage
- highlight upcoming inspections
- display rep activity and basic conversions

## Suggested MVP Data Model

The model should stay relational and straightforward.

### User

- id
- name
- email
- role
- active
- created_at
- updated_at

### Lead

- id
- source
- status
- owner_user_id
- contact_id
- property_id
- service_type
- priority
- notes
- created_at
- updated_at

### Contact

- id
- first_name
- last_name
- primary_phone
- secondary_phone
- email
- preferred_contact_method
- created_at
- updated_at

### Property

- id
- contact_id
- address_line_1
- address_line_2
- city
- state
- postal_code
- property_type
- notes
- created_at
- updated_at

### Inspection

- id
- lead_id
- property_id
- assigned_user_id
- scheduled_at
- status
- outcome
- notes
- created_at
- updated_at

### Opportunity

- id
- lead_id
- contact_id
- property_id
- inspection_id
- owner_user_id
- stage
- service_type
- estimated_value
- close_lost_reason
- expected_close_date
- created_at
- updated_at

### Job

- id
- opportunity_id
- contact_id
- property_id
- assigned_user_id
- status
- sold_value
- production_notes
- created_at
- updated_at

### Activity

- id
- entity_type
- entity_id
- activity_type
- user_id
- subject
- body
- due_at
- completed_at
- created_at

## Roles and Permissions

Permissions should remain simple in the MVP.

### Sales Rep

- view and edit assigned leads, inspections, opportunities, and jobs
- create contacts, properties, notes, and activities
- view dashboard data scoped to their work where needed
- cannot manage users or broad system settings

### Office Admin

- create and manage leads, contacts, properties, and appointments
- view most operational records across the company
- update jobs and scheduling-related details
- support data cleanup and reassignment

### Manager / Owner

- full visibility across all records
- manage assignments and pipeline reporting
- review performance and operational status
- manage users and role access in the MVP

## Key Screens

### Dashboard

- pipeline summary
- upcoming inspections
- recent activity
- quick metrics by rep and stage

### Lead List

- searchable table or mobile-friendly list
- filters by owner, source, status, and date

### Lead Detail

- contact and property summary
- status and assignment
- activity timeline
- quick actions for scheduling inspection and creating opportunity

### Calendar / Appointments

- list or calendar view of inspections
- basic scheduling and reassignment

### Opportunity Pipeline

- stage-based board or simple grouped list
- quick visibility into deal progression

### Opportunity Detail

- inspection context
- estimate details
- stage history and next step

### Job List / Job Detail

- high-level post-sale tracking
- production handoff notes and status

### Contacts / Properties

- searchable customer records
- linked record history

## Recommended MVP Boundaries

Do include:
- core CRM records
- assignment and status tracking
- basic dashboard metrics
- mobile-friendly workflows

Do not include yet:
- complex automation engines
- advanced estimating tools
- inventory management
- deep production scheduling
- commissions, payroll, or accounting
- customer portal
- multi-company tenancy unless clearly needed

## Open Questions

- What lead sources need first-class support on day one: manual only, web forms, CSV import, or third-party integrations?
- Should opportunities support multiple estimate versions in the MVP, or just one current estimate state?
- Do managers need company-wide visibility by default, or should access be segmented by branch/team?
- Is a single company deployment enough for now, or does the product need multi-tenant support later?
- Are photos required in the first release, or can notes-only inspection capture ship first?
- Should jobs include production milestone dates in MVP, or only a simple status field?
- What exact pipeline stages should be standardized for the business?
- Which metrics matter most on the first dashboard: lead volume, set rate, close rate, sold value, or jobs in production?
