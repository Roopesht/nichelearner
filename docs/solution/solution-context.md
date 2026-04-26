# Solution Context

## Reference Products

[MISSING: specific competitor or reference products not named in source files]

The product-vision.md notes that "100+ established players" exist in the JEE prep market, with competition characterized as "huge." Competitors provide similar core services but lack two critical differentiators: (1) cross-topic reference mapping and (2) proficiency-matched personalized reports. However, no specific reference products are documented to track against.

## Compliance & Legal Constraints

**OWASP Top 10 Security Standards** — Product must implement security architecture aligned with OWASP Top 10 guidelines (per tech-decisions.md).

[MISSING: specific data protection, privacy, or regulatory constraints applicable to the target market (India, educational data, student data)]

[MISSING: payment processing or financial compliance requirements for subscription revenue model]

## Launch Deadline & Timeline

[MISSING: no launch deadline found — architect must provide a target date or confirm iterative delivery model]

Source files reference:
- Free-trial acquisition strategy ("Reach colleges and offer it free for the month") suggesting near-term college partnership pilots
- No specific launch date, regulatory hard-stops, or seasonal windows documented

## Product-Level Technology Decisions

| Layer | Decision | Rationale |
|-------|----------|-----------|
| **Frontend** | Vue.js | Lightweight, component-based UI for student-facing adaptive quiz interfaces |
| **Backend** | Golang | Statically typed, concurrent processing for real-time assessment evaluation and personalization engine |
| **Database** | MySQL | Structured storage for student profiles, quiz answers, topic cross-references, and preparation reports |
| **Infrastructure** | AWS | Cloud-native scaling for handling variable user load during seasonal JEE prep cycles |
| **API Architecture** | REST API | Standard integration pattern for frontend, third-party affiliate/college integrations |
| **Security** | OWASP Top 10 | Mandatory compliance framework for handling student data and authentication |

**Notes:**
- No documented rationale for tech choices; decisions are architectural assumptions only.
- No specified requirements for AI/ML inference (required for personalized assessment and cross-reference mapping per solution.md).
