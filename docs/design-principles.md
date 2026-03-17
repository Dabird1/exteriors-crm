# Infinity CRM Design Principles

## Design Intent

This product should feel as simple as the best consumer software while handling serious operational work for a multi-brand home services platform.

The right benchmark is not "enterprise CRM." The right benchmark is:
- extremely clear
- extremely fast
- hard to misuse
- easy to learn in the field

The product should borrow the strongest structural ideas from Salesforce and Zoho while removing clutter, menu sprawl, and setup-heavy complexity.

## UX Philosophy

### Apple-Simple

Every screen should answer three questions immediately:
- where am I
- what matters most here
- what is the next action

The interface should feel calm, obvious, and reduced to essentials.

### Field-Friendly

Reps should be able to use the product quickly on a phone or tablet in a driveway, on a porch, or between appointments.

This means:
- large tap targets
- short forms
- clear statuses
- minimal modal stacking
- obvious next-step actions

### Progressive Depth

Do not show all options at once.

Default to:
- simple lists
- simple cards
- one primary action per screen
- advanced details only when the user goes deeper

## Branding Model

### Infinity First, Brand Aware

The application should always feel like one Infinity platform.

Brand identity should appear as context, not as a separate product.

Recommended model:
- Infinity shell is the consistent foundation
- active brand logo appears in header or workspace context
- brand rider text appears where useful
- color accents can vary slightly by brand, but the layout and interaction model remain fixed

### Per-Brand Rider and Theming

Brand expression should be contextual and lightweight.

Recommended MVP theming:
- Infinity master shell stays structurally consistent
- each brand can provide logo, rider text, and a restrained accent palette
- typography, spacing, interaction patterns, and navigation remain shared

This keeps the platform premium and coherent while still letting each brand feel recognized.

### What to avoid

- totally different UI patterns per brand
- heavy theming controls in MVP
- brand-specific navigation structures

## Navigation Principles

### Shallow and Predictable

Navigation should stay short and role-aware.

Users should not dig through multiple menu layers to do everyday work.

### Context Before Tools

The interface should always show the current scope:
- platform
- brand
- office
- rep

That scope should frame what the user sees and what reports mean.

### Role-Based Simplicity

Different roles should see different entry points, but the product should still feel like one consistent system.

Platform admins should start in reporting and brand visibility.
Brand managers should start in brand performance and team execution.
Reps should start in their own work queue.
Brand leaders should use the same navigation shape as brand managers in MVP.

## Screen Design Principles

### Dashboards

- lead with the few metrics that matter most
- compare current performance versus recent trend
- favor drill-down over overloaded summary pages

### Lists

- show status, owner, source, and next action first
- keep filters close at hand but visually quiet
- support fast scan and quick action

### Record Detail Views

- show summary first
- timeline second
- related records third
- keep actions visible without overwhelming the page

### Forms

- use plain business language
- keep sections short
- use defaults and smart ordering
- avoid long stacked forms where possible

## Mobile-First Field Usability

The mobile experience should not be a compressed desktop app.

It should prioritize:
- one-handed readability
- fast status changes
- clear appointment context
- minimal typing in the field
- visible primary actions without hunting through menus

## Reporting Principles

Reporting should be usable by leadership and frontline teams without translation.

Metrics should:
- use standardized names
- roll up consistently across levels
- preserve the same definitions platform-wide
- be available at platform, brand, office, and rep scope where relevant

## MVP Navigation Model

### Platform Admin

- Home
- Brands
- Reporting
- Leads
- Appointments
- Opportunities
- Jobs
- Users
- Settings

### Brand Manager

- Home
- Leads
- Appointments
- Opportunities
- Jobs
- Offices
- Team
- Reporting

### Sales Rep

- Home
- My Leads
- My Appointments
- My Opportunities
- My Jobs
- Activity

## MVP Visual Direction

- warm, premium, modern look
- high contrast text
- restrained accent color use
- generous spacing
- typography that feels intentional, not default SaaS

The UI should feel polished and premium without becoming decorative.

## Product Guardrails

- do not expose unnecessary settings in MVP
- do not let reporting definitions drift by brand
- do not let navigation grow into a large admin tree
- do not optimize for edge cases before the core funnel is effortless

## Practical Standard

If a feature adds flexibility but makes daily usage slower or less obvious, it should probably wait until after MVP.
