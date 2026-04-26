---
name: Contact/Support Form
slug: contact-support-form
description: General inquiry form for users with questions before committing to trial
---

## Summary

A general-purpose inquiry form for students, parents, and other visitors to submit questions or request more information about NicheLearner. This form reduces friction for hesitant users (especially parents) by providing a clear way to get answers before signing up for a trial.

## User Story

As a parent with questions about NicheLearner's security or how it works, I want to submit a question and get a response, so I feel confident allowing my child to try the platform.

## Acceptance Criteria

- **Form is discoverable from homepage** — link to "Contact us," "Ask a question," or "Request more information" is visible (footer, header, or dedicated link)
- **Form collects user information** — name, email, and message are required; phone number is optional
- **Form includes optional subject/category** — dropdown or text field to indicate inquiry type (e.g., "Privacy question," "Product features," "How it works") is helpful
- **Message field has reasonable size** — text area allows user to write substantive questions
- **Form submission is validated** — required fields are checked, email format is validated
- **Submission succeeds with clear confirmation** — form accepts valid input and displays success message
- **Confirmation email is sent** — user receives confirmation that inquiry was received
- **Inquiry is stored for response** — message is saved in backend for team to respond to
- **Response pathway is documented** — user knows when to expect a response (e.g., "We'll respond within 24 hours")

## Priority

**Medium** — Contact form reduces friction for hesitant users, particularly parents; improves conversion by addressing concerns before signup. Not required for launch but improves user experience.

## Dependencies

- `homepage` (contact form link should be on homepage)
