---
name: College Partnership Inquiry Form
slug: college-partnership-inquiry-form
description: Form for college administrators to submit interest in institutional trial or partnership
---

## Summary

A form that college administrators fill out to express interest in institutional trials or partnerships. The form collects basic information about the college and their needs, stores the inquiry in the backend, and triggers a confirmation email. This initiates a business conversation between the college and NicheLearner's partnerships team.

## User Story

As a college administrator interested in NicheLearner, I want to submit my contact information and learning needs in a simple form, so the partnerships team can follow up with me about institutional trial options.

## Acceptance Criteria

- **Form is accessible from college partnerships page** — clear "Contact us," "Start partnership inquiry," or "Request institutional trial" button/link
- **Form collects required information** — college name (required), number of students (required), primary contact name and email (required), desired trial start date (helpful), specific requirements (optional)
- **Form includes explanation of what happens next** — text states "Our partnerships team will contact you within X business days"
- **Form submission is validated** — required fields are marked, email format is validated
- **Submission is successful and confirmed** — form accepts valid input without errors
- **Confirmation email is sent to submitter** — email thanks them for interest and sets expectation for follow-up timing
- **Inquiry is stored in backend** — data is saved for partnerships team to access and respond to
- **College name is tagged for attribution** — inquiry is tagged with college name for tracking institutional channel ROI

## Priority

**High** — College partnership inquiry form is the lead-generation step for the institutional channel; without it, college outreach cannot be measured or managed.

## Dependencies

- `college-partnerships-page` (form is linked from this page)
