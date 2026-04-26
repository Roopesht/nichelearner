---
name: Trial Source Attribution System
slug: trial-source-attribution-system
description: Backend system to identify and track which channel brought each trial signup
---

## Summary

A backend system that captures and stores the source of each trial signup (organic search, affiliate link, college referral, etc.). This enables measurement of acquisition channel ROI, supports college partnership attribution, and provides data for optimizing marketing spend. The system tracks signup source at the moment of registration and makes it queryable for analytics.

## User Story

As a product manager, I want to know where each trial signup came from (Google search, specific college referral, affiliate link, etc.), so I can measure which channels are most effective and optimize acquisition strategy.

## Acceptance Criteria

- **Signup source is captured during registration** — system records whether signup came from organic search, affiliate link, specific college referral, direct traffic, or other source
- **College referrals are tagged with college name** — if signup comes from a college referral link, the college name is recorded in the database
- **Source data is stored in database** — signup source is persisted with each trial account for future reference
- **Source data is queryable** — analytics system can retrieve signup-source data (e.g., "how many signups from college X," "what % came from organic vs. affiliate")
- **URL parameters are used for non-college referrals** — if applicable, UTM parameters or similar query strings are used to track affiliate and organic sources
- **College referral links include attribution** — college referral links contain a parameter that identifies the college (e.g., `?college=college_name`)
- **Attribution does not create friction** — tracking is transparent to user; no visible analytics code or delays in signup
- **Historical data is available** — system maintains records of all signups and their sources for reporting

## Priority

**High** — Attribution is required to measure acquisition channel ROI and success metrics (trial signup rate, college partnership effectiveness); without it, marketing effectiveness cannot be assessed.

## Dependencies

- `free-trial-signup-form` (source data must be captured at signup)
