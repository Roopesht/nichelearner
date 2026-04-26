# User Flows: Marketing Website

This document describes the primary user flows for the NicheLearner marketing website. Each flow represents a common path a user takes to accomplish their goal.

---

## Flow 1: Individual Student Discovery & Trial Signup

**Actor:** JEE Aspirant (Student)

**Goal:** Discover NicheLearner and evaluate whether it provides honest feedback on preparation level; sign up for a free trial to test the adaptive quiz experience.

**Entry Point:**
- Search engine result (e.g., "JEE prep platform," "personalized JEE guidance")
- Affiliate link from a partner site
- College referral link (direct link from college website or partner email)

**Steps:**

| # | User Action | System Response |
|---|---|---|
| 1 | Arrives at marketing website homepage (via search, affiliate, or college referral) | Display homepage with value proposition, credibility markers, and core capabilities (personalized assessment, cross-topic references, adaptive guidance) |
| 2 | Reads value proposition and product overview on homepage | System displays clear, concise explanation of what the platform does (no detailed learning content) |
| 3 | Reviews credibility markers (security, privacy, how it works) | System provides transparent information to build trust (what data is used, how assessment works, who built it) |
| 4 | Evaluates whether NicheLearner solves their problem (need honest feedback, clear next steps) | System displays student-specific messaging: "Get honest assessment of your preparation level," "Understand which topics matter most," "Receive personalized roadmap" |
| 5 | Clicks "Start Free Trial" or "Try for Free" (primary CTA) | System displays signup form with minimal fields |
| 6 | Enters email, name, password (optional second password entry) | System validates input in real-time (email format, name not empty) |
| 7 | Submits signup form | System creates trial account and stores source attribution (organic search, affiliate, college referral) |
| 8 | Signup successful | System sends confirmation email with trial access link and setup instructions |
| 9 | Clicks link in confirmation email | System validates token, grants trial access to product platform, starts trial countdown (30 days or per terms) |
| 10 | Accesses product platform | User can now start taking adaptive quizzes and exploring cross-topic references |

**Exit Point:**
- **Success:** Trial account created, user logs in to product platform with full trial access
- **Partial:** User completes form but doesn't click confirmation link (trial not yet active)
- **Abandoned:** User closes website without signing up

**Notes:**
- Signup form should take <2 minutes to complete (minimal friction)
- Mobile-responsive form is critical (students primarily use mobile devices)
- Signup source must be tracked to measure acquisition channel ROI (organic vs. affiliate vs. college)
- If college referral: system should tag trial with college name for institutional metrics
- User may abandon at form step if friction is too high (required fields, complex password rules, slow form response)
- Form should NOT ask for payment info or credit card during trial signup (free trial, no credit card required)

---

## Flow 2: Parent Evaluation & Trial Approval Decision

**Actor:** Parent

**Goal:** Evaluate NicheLearner's credibility and safety; determine whether to allow/encourage their child to take a free trial; potentially monitor their child's engagement.

**Entry Point:**
- Student shows parent the website or shares signup link
- Parent independently searches for JEE prep solutions
- College sends email recommending institutional trial to parent

**Steps:**

| # | User Action | System Response |
|---|---|---|
| 1 | Arrives at marketing website homepage (via student link, own search, or college email) | Display homepage with value proposition and credibility markers |
| 2 | Looks for trust signals: product safety, data privacy, transparent pricing | System provides clear information: security/privacy policy link, no hidden costs, free trial = truly free (no credit card required) |
| 3 | Reads product overview and parent-specific messaging | System displays parent concerns: "Honest feedback on preparation level," "Understand where your child stands," "Personalized guidance, not generic content," "Track engagement and progress" |
| 4 | Reviews how the product helps: what assessment means, how it differentiates from competitors | System explains: adaptive quizzes scale to student's level, cross-topic mapping shows concept connections, personalized recommendations based on actual performance |
| 5 | Evaluates investment decision: Is free trial worth trying? Is paid subscription cost reasonable (future decision)? | Parent forms opinion: legitimate, safe, potentially useful for child |
| 6 | Approves child's trial OR requests more information (FAQ, call, email) | Parent either: (a) gives child the signup link, (b) contacts website for more info, or (c) declines |
| 7a | [If approve] Parent shares signup link with student | Student receives link and follows Flow 1 (Student Discovery & Trial Signup) |
| 7b | [If request more info] Parent clicks "Contact us" or searches FAQ | System displays contact form or FAQ section; parent submits question or request |
| 8 | [Optional: During trial] Parent monitors child's engagement (if product platform provides parent portal) | System may notify parent of trial signup; parent logs in to check progress, quiz results, recommendations |
| 9 | [At end of trial or mid-trial] Parent evaluates conversion decision: pay for subscription or let trial expire? | Parent reviews child's engagement and progress; makes decision to convert or not |

**Exit Point:**
- **Success:** Parent approves trial, child signs up (leads to Flow 1)
- **Approval with delay:** Parent approves but child hasn't signed up yet
- **Request info:** Parent submits contact form asking clarifying questions
- **Declined:** Parent decides platform is not a fit; user leaves website
- **Conversion decision:** At trial end, parent decides to pay for subscription or not

**Notes:**
- Parent may not directly sign up but is a key decision-maker; messaging must address parent concerns (safety, outcomes, investment)
- Clear privacy/data handling information is critical (what data is collected, how is it protected, COPPA compliance if minors)
- Messaging should emphasize: "No credit card required for free trial," "30-day free trial," "Cancel anytime"
- Trial duration and cost clarity (e.g., "$X/month after trial ends") builds trust
- Parent may want a parent portal to monitor child progress (may be product feature, not website feature)
- Some parents may need support via chat or email during evaluation phase; contact pathway should be clear

---

## Flow 3: College Administrator Institutional Trial Inquiry

**Actor:** College Administrator / Educator

**Goal:** Discover NicheLearner's institutional offering, understand how to deploy for their student body, and initiate a partnership or pilot trial.

**Entry Point:**
- College admin searches for test prep solutions for their institution
- College admin receives referral or recommendation from another college or partner
- NicheLearner outreach to college (email, LinkedIn, etc.) drives admin to website

**Steps:**

| # | User Action | System Response |
|---|---|---|
| 1 | Arrives at marketing website homepage | Display homepage with general value proposition |
| 2 | Looks for institutional or college-specific offering | System displays secondary navigation or banner: "For Institutions" or "For Colleges" link |
| 3 | Clicks "For Institutions" or "College Partnerships" | System displays page dedicated to institutional deployment: bulk access, trial terms, integration support, contact pathway |
| 4 | Reads about institutional offering | System explains: how colleges can offer NicheLearner to their students, what data colleges can access, how trials are managed at scale, what support is provided |
| 5 | Evaluates differentiation: does cross-topic mapping and personalized assessment differentiate from competitors? | College admin assesses fit: does this solve our students' prep needs better than alternatives? |
| 6 | Decides to explore partnership or institutional trial | College admin wants to move forward with a pilot or negotiation |
| 7 | Clicks "Contact us for institutional trial" or "Start college partnership inquiry" CTA | System displays institutional inquiry form |
| 8 | Fills out inquiry form: college name, number of students, desired trial start date, contact name, email, phone | System validates input (required fields, valid email) |
| 9 | Submits form | System stores inquiry in CRM or backend database and tags with college name |
| 10 | Submission successful | System sends confirmation email: "Thank you for your interest. Our partnerships team will contact you within X business days." |
| 11 | College admin receives follow-up email from partnerships team | Partnerships team (not website) initiates business conversation: trial terms, institutional pricing, integration timeline, implementation support |

**Exit Point:**
- **Success:** Institutional inquiry submitted, partnerships team begins outreach
- **Abandoned:** Admin closes website without submitting form
- **Escalated:** Admin requests call or schedules meeting during inquiry (not automated; partnerships team handles)

**Notes:**
- This flow does NOT complete a product trial on the website — it initiates a business conversation
- College administrator does NOT get a personal trial account from the website; they engage with the partnerships team
- Institutional referral links (once negotiated) point back to the main product platform's trial signup, not this website form
- College may deploy trials for 100s or 1000s of students; trial expiration and tracking must be managed in the product platform, not the website
- Website form is the **lead generation** step; partnership execution happens offline (email, calls, contracts)
- Form should collect: college name (required), number of students (required for scope estimate), primary contact info (required), desired timeline (helpful), any specific requirements (optional)
- After submission, marketing/partnerships team owns the lead — website's role ends

---

## Flow 4: Trial-to-Paid Conversion

**Actor:** JEE Aspirant (Student) — after completing or during free trial

**Goal:** Evaluate trial results, decide whether to purchase a paid subscription, and complete payment to continue using the platform.

**Entry Point:**
- Trial period is about to end (system sends reminder notification)
- Student experiences value during trial and wants to continue
- Student still has days remaining on trial but chooses to upgrade

**Steps:**

| # | User Action | System Response |
|---|---|---|
| 1 | [Proactive] Student receives "Trial ending soon" notification (7-10 days before expiration) | System sends email/in-app notification: "Your trial ends in X days. Upgrade now to keep using NicheLearner." |
| 2 | Student reviews their trial results: quiz performance, recommendations, cross-topic references used | Student evaluates: did this platform provide honest feedback? Are the recommendations helpful? |
| 3 | Student decides to convert to paid subscription (or decides to let trial expire) | [If convert:] Student clicks "Upgrade to paid" or "Subscribe now" button |
| 4 | System redirects to subscription/payment page (on product platform or integrated billing portal) | System displays subscription options: monthly plan, yearly plan, pricing, terms |
| 5 | Student selects subscription plan (if multiple options exist) | System displays confirmation: pricing, billing frequency, auto-renewal terms |
| 6 | Student enters payment information: credit card, debit card, UPI, or other Indian payment method | System displays secure payment form (PCI-DSS compliant) |
| 7 | Student submits payment | Payment processor (Stripe, Razorpay, etc.) charges student's payment method |
| 8 | Payment successful | System processes payment, updates account status from "trial" to "paid subscriber," confirms renewal date |
| 9 | Student receives confirmation | System sends confirmation email: subscription active, billing date, renewal date, how to manage subscription or cancel |
| 10 | Student continues using platform | Trial restrictions (if any) are removed; student has full access to all features |

**Exit Point:**
- **Success:** Payment processed, subscription active, student continues using platform
- **Trial expires without conversion:** Trial access revoked, student's account becomes inactive (may be re-engaged later via email)
- **Payment fails:** Student receives notification and option to retry or choose different payment method
- **Abandoned:** Student closes payment page without submitting; trial countdown continues

**Notes:**
- This flow occurs primarily on the **product platform**, not the marketing website
- Marketing website tracks trial-to-paid conversion as a success metric but does not execute payment
- Website may display testimonials, benefits, or social proof in days before trial ends to encourage conversion
- Payment processing and subscription management are handled by the product platform, not the marketing website
- Multiple payment methods critical for India (credit card, debit card, UPI, net banking, digital wallets)
- Subscription terms should be clear: auto-renewal enabled by default, easy to manage from account settings
- Trial revocability: if payment fails or student doesn't convert, system must NOT grant platform access after trial expiration date
- Students should be able to cancel subscription easily (regulatory requirement in many markets; good UX practice)

---

## Summary: Flow Dependencies

```
Individual Student Discovery & Trial Signup (Flow 1)
    ↓
    [Student takes quiz, receives feedback, evaluates value]
    ↓
Trial-to-Paid Conversion (Flow 4)
    ↓
    [Student pays, subscription active]


Parent Evaluation & Trial Approval (Flow 2)
    ↓
    [Parent approves] → Flow 1 (student signs up)
    ↓
    [Optional] Parent monitors engagement
    ↓
    Flow 4 (parent approves paid subscription)


College Administrator Institutional Inquiry (Flow 3)
    ↓
    [Inquiry submitted, partnerships team follows up]
    ↓
    [Negotiation and trial deployment happens offline]
    ↓
    [College receives institutional referral links]
    ↓
    [College students follow Flow 1 via college referral link, tagged with college attribution]
```

---

## Flows NOT Included

The following user interactions are out of scope for this document or handled elsewhere:

- **Product usage flows** (taking quizzes, viewing cross-topic references, reviewing recommendations) — these happen in the product platform, not the marketing website
- **Affiliate signup or integration** — partner onboarding is a separate business process; affiliate links drive to marketing website but affiliate management is handled separately
- **Customer support or account management** — password resets, account recovery, support tickets are handled by the product platform, not the marketing website
- **Content marketing or blog navigation** — if blog content exists, it's served separately; marketing website focus is on discovery and signup
