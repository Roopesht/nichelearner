# Module: Marketing Website

## Purpose

The marketing website is the primary discovery and trial-entry point for NicheLearner. It establishes product credibility, communicates the core value proposition (personalized proficiency-matched assessment and cross-topic reference mapping), and channels JEE aspirants and parents into free-trial programs. It also supports institutional acquisition by enabling college administrators to understand and deploy the product for their student body.

## Users

- **JEE Aspirant (Student)** — evaluates whether the platform will provide honest feedback on their preparation level and help them identify gaps. Signs up for free trial to test the adaptive quiz experience.

- **Parent** — seeks assurance that the platform is legitimate, safe, and will improve their child's outcomes. Reviews credibility markers before allowing their child to access or before evaluating a paid subscription.

- **College Administrator / Educator** (acquisition channel) — discovers institutional trial opportunities and understands how to integrate the platform into their college's test-prep offerings. Uses the website to evaluate bulk or institutional access.

## Business Rationale

Without a credible marketing website, the core differentiation (cross-topic reference mapping and proficiency-matched assessments) remains invisible to target users. The free-trial acquisition strategy referenced in solution.md depends entirely on having a landing place where:

1. College partnerships can refer their student bodies (the primary near-term acquisition channel)
2. Organic search and affiliate links drive individual sign-ups  
3. Students and parents can rapidly form trust and begin a trial without friction

The website is the prerequisite for executing the college outreach strategy and proving the conversion hypothesis (5% of trial users becoming paid subscribers).

## Success Definition

Trial signup rate from marketing-website visitors reaches **[MISSING: target % or absolute number per week]** within **[MISSING: timeframe]** of launch.

Of those trial signups, **5% convert to paid subscription** within **[MISSING: conversion window]**.

Institutional trial deployments (college partnerships) reach **[MISSING: target number of colleges]** with **[MISSING: timeframe]**.

---

*Note: Solution.md marks user acquisition target and revenue target as MISSING at the product level. Marketing-website success must be defined in terms of trial-signup volume and conversion rate thresholds to measure product-market fit, not product-level revenue targets.*

## Constraints

- Must support free-trial signup flow with minimal friction (college partners will refer students via links from the website)
- Must comply with OWASP Top 10 security standards for handling student data and authentication (solution-context.md)
- Must be deployable and discoverable in time to support college partnership pilots (no hard deadline documented; solution-context.md implies "near-term")
- Trial access must be revocable and trackable to measure the 5% conversion metric

## Non-Goals

- Will **not** list course subjects, topics, or detailed learning content on the website — that belongs in the product platform
- Will **not** execute bulk-email or WhatsApp marketing campaigns — focus is on web-discoverable channels (SEO, affiliate partnerships, college direct links)
- Will **not** replace the main learning platform — it is an entry point, not a substitute for the adaptive quiz experience
- Will **not** serve as a content marketing engine with blogs, tutorials, or strategy guides
