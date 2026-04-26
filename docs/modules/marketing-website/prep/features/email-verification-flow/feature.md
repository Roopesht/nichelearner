---
name: Email Verification Flow
slug: email-verification-flow
description: Email confirmation and trial account activation via token validation
---

## Summary

After signup, a confirmation email is sent to the user with a unique verification link. Clicking the link validates the email address and grants access to the product platform for the trial period. This flow ensures email validity and marks the transition from marketing website to product trial.

## User Story

As a user who signed up for a free trial, I want to verify my email address with a simple link click, so I can immediately start using the platform.

## Acceptance Criteria

- **Confirmation email is sent immediately after signup** — user receives email within seconds of form submission
- **Email contains a unique verification token** — token is one-time use and expires after a reasonable period (e.g., 24 hours)
- **Verification link is clear and clickable** — link text is "Verify Email," "Activate Trial," or similar; link works reliably
- **Clicking link successfully validates email** — token is accepted, user email is marked as verified
- **User is granted trial access after verification** — user can log in to product platform with trial account
- **Trial countdown starts upon verification** — trial period begins (not at signup), tracked by backend
- **Invalid or expired tokens show clear error message** — user knows link is expired or invalid and can request new link
- **User can request new verification email if needed** — resend functionality available (e.g., "Didn't receive email? Click here to resend")
- **Verification link works from any device** — user can click on mobile or desktop

## Priority

**High** — Email verification is required to activate trial and prevent fake signups; without it, trial access cannot be granted.

## Dependencies

- `free-trial-signup-form` (user must sign up first)
- `trial-access-management-system` (backend must track trial start date and expiration)
