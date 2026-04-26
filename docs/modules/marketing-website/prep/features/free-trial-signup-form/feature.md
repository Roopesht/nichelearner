---
name: Free Trial Signup Form
slug: free-trial-signup-form
description: Minimal friction registration form to create a trial account
---

## Summary

A simple signup form that collects minimal required information (email, name, password) to create a trial account. The form is designed for <2 minute completion with real-time validation to reduce friction and maximize conversion from visitor to trial user.

## User Story

As a student or parent, I want to quickly create a trial account with just my email, name, and password, so I can start testing the platform without lengthy registration.

## Acceptance Criteria

- **Form has minimal required fields** — only email, name, and password are required; no phone number, age, school info, or payment details
- **Form submission takes <2 minutes** — form is short and straightforward, not multi-step
- **Real-time input validation is provided** — user sees validation feedback as they type (e.g., email format, password strength)
- **Submission is successful** — form accepts valid input and creates trial account
- **Form clearly indicates this is a free trial** — text states "Free trial" or "No credit card required"
- **Submit button text is clear** — button says "Start Trial," "Create Account," or equivalent (not ambiguous like "Next")
- **Form is accessible on mobile** — form fields are large enough to tap on mobile devices
- **Password requirements are reasonable** — password rules are simple and clearly displayed (e.g., minimum length, no exotic character requirements)
- **User sees confirmation after submission** — success message displayed, and user is directed to check email for verification link

## Priority

**High** — Free trial signup is the primary conversion point from marketing website to product trial; form friction directly impacts conversion rate.

## Dependencies

- `email-verification-flow` (user must verify email to activate trial)
- `trial-source-attribution-system` (signup must be tagged with source channel)
