# Detailed Specification: Free Trial Signup Form

## 1. Screens

### Screen 1: Signup Form Page

**Layout & Components:**

- **Hero Section (Above Form):**
  - Headline: "Start your free trial" or "Get honest feedback on your prep"
  - Subheading: "No credit card required. 30-day free access."
  - Form section below

- **Form Container:**
  - Width: 400px (desktop), 90% viewport width (mobile)
  - Centered on page or full-width with padding
  - Light background or white background with subtle border

- **Form Fields (in order):**
  1. **Email input**
     - Label: "Email address"
     - Placeholder: "name@example.com"
     - Type: email
     - Field width: 100% of form container
     - Required indicator: asterisk (*)

  2. **Name input**
     - Label: "Full name"
     - Placeholder: "Enter your full name"
     - Type: text
     - Field width: 100%
     - Required indicator: asterisk (*)

  3. **Password input**
     - Label: "Password"
     - Placeholder: "Minimum 8 characters"
     - Type: password
     - Field width: 100%
     - Required indicator: asterisk (*)
     - Password strength indicator below field (optional: weak/medium/strong)

  4. **Password confirmation input** (optional, per requirements—may be single entry)
     - Label: "Confirm password" (if required)
     - Type: password
     - Field width: 100%
     - Shown only if confirmation is required

- **Password Requirements Text**
  - Small text below password field: "At least 8 characters, must include uppercase, lowercase, and a number"

- **Submit Button**
  - Label: "Start Trial" or "Create Account"
  - Type: primary button (color: brand color)
  - Width: 100% of form
  - Disabled state while form is submitting
  - Hover state: darker shade or slight lift effect

- **Trust Text Below Form**
  - "✓ No credit card required"
  - "✓ 30-day free trial"
  - "✓ Cancel anytime"
  - Small text, secondary color

- **Terms & Privacy**
  - Checkbox: "I agree to the Terms of Service and Privacy Policy"
  - Required to submit form
  - Links to Terms and Privacy pages in separate tabs/windows

- **Signup Source Attribution**
  - Hidden form field or URL parameter (not visible to user)
  - Captures signup source: "organic," "affiliate," "college_{college_id}," etc.
  - Populated server-side or via JavaScript from URL params

---

### Screen 2: Signup Success / Verification Pending

**Displayed after form submission:**

- **Success Message**
  - Headline: "Check your email"
  - Body: "We've sent a verification link to [user_email]. Click the link to activate your trial."

- **Next Steps**
  - Instruction: "Didn't see the email? Check your spam folder or [resend link button]"
  - Link: "Resend verification email" (debounced, can be clicked after 60 seconds)

- **Expected Timeline**
  - "You should receive the email in a few seconds. Your trial begins once you verify your email."

- **Secondary CTA**
  - "Back to home" link (return to homepage)

---

### Screen 3: Error States (see Error States section below)

---

## 2. Business Rules

1. **Account Creation**
   - New trial account is created immediately upon valid form submission
   - Account status is initially "trial_pending_verification"
   - Account becomes "trial_active" only after email verification link is clicked
   - Trial duration: 30 days from email verification (or per product team specification)

2. **Email Verification**
   - Verification link is sent to provided email address
   - Link contains time-limited token (valid for 24 hours)
   - Token is cryptographically secure (e.g., random 32+ byte string, hashed in DB)
   - Upon click, token is validated and account status updated to "trial_active"
   - Start date of trial is recorded (for calculating 30-day expiration)

3. **Source Attribution**
   - Every signup is tagged with source:
     - **organic:** user arrived via search or direct navigation
     - **affiliate_{partner_id}:** user arrived via affiliate link
     - **college_{college_id}:** user arrived via college referral link (if college partnership link exists)
     - Source extracted from URL parameter (?ref=, ?utm_source=, or college link tracking)
   - Source is immutable after account creation (recorded in signup table)

4. **Password Security**
   - Passwords hashed server-side using bcrypt (cost factor ≥ 12) or Argon2
   - Never transmitted or logged in plaintext
   - No password length limits (allow passphrases)
   - Server enforces password policy: minimum 8 characters, at least one uppercase, one lowercase, one digit
   - (Optional: allow special characters, but not required)

5. **Email Uniqueness**
   - Email must be unique in the user database
   - Case-insensitive comparison (user@example.com == User@Example.com)
   - Duplicate email submission shows error: "An account with this email already exists. [Forgot password link] or [Use different email]"

6. **Rate Limiting**
   - IP-based rate limiting: maximum 5 signup attempts per IP per 15 minutes
   - Email-based rate limiting: maximum 3 verification email resend attempts per email per hour
   - Failed attempts return error message with retry-after guidance

7. **OWASP Compliance**
   - All inputs sanitized to prevent XSS injection
   - CSRF tokens included in form (per Vue.js security best practices)
   - Password not echoed in response or logs
   - HTTPS enforced (no HTTP)
   - Secure cookies: HttpOnly, Secure, SameSite=Strict flags

---

## Edge Cases

1. **User enters unverified email**
   - Account created but remains in "trial_pending_verification" state
   - User cannot access product until email verified
   - Email verification prompt shown after 15 minutes of inactivity (on website)

2. **Verification email never received**
   - User can request resend of email (max 3 times per hour)
   - Email server bounces (invalid address): system logs bounce, shows error to user on next login attempt
   - User should be able to update email and request new verification link

3. **User clicks verification link multiple times**
   - First click activates account, token is consumed
   - Subsequent clicks show message: "This link has already been used. Your account is active. [Go to platform]"

4. **Verification token expires (24 hours)**
   - User clicks expired link
   - Error message: "This link has expired. [Request new verification email]"
   - Resend button regenerates token and sends new email

5. **Password reset before first login**
   - If user forgets password before verification, they receive link to reset password
   - Password reset link is separate from email verification
   - If user resets password, email verification is still required before trial access

6. **User signup with college referral, then college trial expires**
   - User's account is tagged with college_id
   - If college trial expires, account status changes to "trial_expired_college"
   - User shown message: "Your college's trial has ended. Upgrade to paid to continue."

7. **Multiple signup attempts from same user**
   - If user tries to signup with same email while account pending verification:
     - Error: "An account with this email is already registered. [Resend verification link]"
   - User can resend verification email without creating duplicate account

8. **Special characters in name**
   - Name field accepts Unicode (e.g., "राज कुमार" for Hindi names)
   - Validation: name must be 2-100 characters
   - Error if name contains only numbers or special characters

9. **Signup during product platform downtime**
   - Signup is accepted and stored in marketing website DB
   - User receives verification email and can click link
   - If product platform is still down during email verification, user sees error: "Platform is temporarily unavailable. Try again in a few minutes."
   - Trial countdown does NOT start until product platform is reachable and account is provisioned

10. **Concurrent signup attempts**
    - If user submits form twice rapidly (before first request completes):
      - Second submission ignored (form disabled while request pending)
      - User sees loading spinner on submit button
      - Only one request processed

---

## API Endpoints

### 1. POST /api/auth/signup

**Purpose:** Create a new trial account

**Request Body:**
```json
{
  "email": "student@example.com",
  "name": "Raj Kumar",
  "password": "SecurePass123",
  "source": "organic|affiliate_partner1|college_123",
  "utm_source": "google",
  "utm_medium": "organic",
  "utm_campaign": "jee_prep"
}
```

**Response (201 Created):**
```json
{
  "user_id": "usr_abc123xyz",
  "email": "student@example.com",
  "status": "trial_pending_verification",
  "verification_sent_at": "2026-04-26T10:30:00Z",
  "message": "Account created. Check your email for verification link."
}
```

**Error Responses:**
- **400 Bad Request:** Invalid email format, password too weak, name too short
- **409 Conflict:** Email already exists
- **429 Too Many Requests:** Rate limit exceeded
- **500 Internal Server Error:** Server error during signup

---

### 2. GET /api/auth/verify-email

**Purpose:** Verify email address and activate trial account

**Query Parameters:**
```
token=abc123xyz789
```

**Response (200 OK):**
```json
{
  "user_id": "usr_abc123xyz",
  "status": "trial_active",
  "trial_start_date": "2026-04-26",
  "trial_end_date": "2026-05-26",
  "message": "Email verified. Your trial is now active.",
  "redirect_url": "https://app.nichelearner.com/login"
}
```

**Error Responses:**
- **400 Bad Request:** Invalid or missing token
- **410 Gone:** Token expired (>24 hours old)
- **404 Not Found:** Token does not exist
- **500 Internal Server Error:** Database error

---

### 3. POST /api/auth/resend-verification

**Purpose:** Resend verification email

**Request Body:**
```json
{
  "email": "student@example.com"
}
```

**Response (200 OK):**
```json
{
  "message": "Verification email resent to student@example.com",
  "resend_count": 1,
  "next_resend_available_at": "2026-04-26T10:45:00Z"
}
```

**Error Responses:**
- **400 Bad Request:** Email not provided
- **404 Not Found:** Email not registered or already verified
- **429 Too Many Requests:** Max resend attempts exceeded (3 per hour)
- **500 Internal Server Error:** Email service failure

---

### 4. POST /api/auth/check-email

**Purpose:** Check if email is already registered (used for real-time validation)

**Request Body:**
```json
{
  "email": "student@example.com"
}
```

**Response (200 OK):**
```json
{
  "email": "student@example.com",
  "registered": false,
  "account_status": null
}
```

or

```json
{
  "email": "student@example.com",
  "registered": true,
  "account_status": "trial_active"
}
```

**Error Responses:**
- **400 Bad Request:** Invalid email format
- **500 Internal Server Error:** Database error

---

## DB Tables

### users

| Column | Type | Constraints | Notes |
|--------|------|-------------|-------|
| user_id | VARCHAR(36) | PRIMARY KEY | UUID or nanoid |
| email | VARCHAR(255) | UNIQUE, NOT NULL | Case-insensitive indexed |
| name | VARCHAR(255) | NOT NULL | Supports Unicode |
| password_hash | VARCHAR(255) | NOT NULL | bcrypt or Argon2 hash |
| account_status | ENUM | NOT NULL, DEFAULT 'trial_pending_verification' | Values: trial_pending_verification, trial_active, trial_expired, paid_subscriber, inactive |
| trial_start_date | DATE | Nullable | Date trial became active |
| trial_end_date | DATE | Nullable | Date trial expires (30 days after trial_start_date) |
| created_at | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE | |
| deleted_at | TIMESTAMP | Nullable | Soft delete flag |

---

### email_verification_tokens

| Column | Type | Constraints | Notes |
|--------|------|-------------|-------|
| token_id | VARCHAR(36) | PRIMARY KEY | UUID or nanoid |
| user_id | VARCHAR(36) | FOREIGN KEY (users.user_id), NOT NULL | |
| email | VARCHAR(255) | NOT NULL | Email address being verified |
| token_hash | VARCHAR(255) | NOT NULL, UNIQUE | SHA-256 or similar hash |
| created_at | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | |
| expires_at | TIMESTAMP | NOT NULL | 24 hours from created_at |
| verified_at | TIMESTAMP | Nullable | When token was used |
| is_consumed | BOOLEAN | DEFAULT FALSE | Mark as consumed after use |

---

### signup_source

| Column | Type | Constraints | Notes |
|--------|------|-------------|-------|
| signup_id | VARCHAR(36) | PRIMARY KEY | UUID or nanoid |
| user_id | VARCHAR(36) | FOREIGN KEY (users.user_id), NOT NULL | |
| source_type | VARCHAR(50) | NOT NULL | Values: organic, affiliate, college |
| source_value | VARCHAR(255) | Nullable | affiliate_partner_id or college_id |
| utm_source | VARCHAR(100) | Nullable | Google Analytics utm_source |
| utm_medium | VARCHAR(100) | Nullable | Google Analytics utm_medium |
| utm_campaign | VARCHAR(100) | Nullable | Google Analytics utm_campaign |
| referrer_url | VARCHAR(500) | Nullable | HTTP referrer |
| ip_address | VARCHAR(45) | Nullable | IPv4 or IPv6, for rate limiting |
| user_agent | VARCHAR(500) | Nullable | Browser/device info |
| created_at | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | |

---

## Frontend Components

### Component: SignupForm (Vue.js)

**File:** `src/components/auth/SignupForm.vue`

**Props:**
- `source` (String, optional): Signup source from URL parameter
- `onSuccess` (Function, optional): Callback after successful signup

**Data:**
```javascript
{
  form: {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '', // if confirmation is required
    agreeToTerms: false
  },
  validation: {
    email: { valid: null, error: '' },
    name: { valid: null, error: '' },
    password: { valid: null, error: '', strength: 'weak' },
    passwordConfirm: { valid: null, error: '' }
  },
  isSubmitting: false,
  serverError: '',
  successMessage: '',
  showVerificationPending: false
}
```

**Methods:**
- `validateEmail(email)` — real-time email validation (format + uniqueness check via API)
- `validateName(name)` — check length (2-100 chars), no special chars only
- `validatePassword(password)` — check minimum 8 chars, uppercase, lowercase, digit; calculate strength
- `validatePasswordConfirm(password1, password2)` — must match
- `handleSubmit()` — validate all fields, submit to /api/auth/signup, handle response
- `handleVerificationSent()` — show success screen, disable form
- `handleError(error)` — display server error message

**Computed Properties:**
- `isFormValid` — true if all required fields valid and terms accepted
- `submitButtonDisabled` — true if form invalid or submitting
- `passwordStrengthLabel` — "Weak" / "Medium" / "Strong" based on password

**Template Structure:**
```html
<form @submit.prevent="handleSubmit">
  <!-- Email field -->
  <label>Email address *</label>
  <input v-model="form.email" @blur="validateEmail" :class="{ error: validation.email.valid === false }" />
  <span class="error-text">{{ validation.email.error }}</span>
  
  <!-- Name field -->
  <label>Full name *</label>
  <input v-model="form.name" @blur="validateName" />
  <span class="error-text">{{ validation.name.error }}</span>
  
  <!-- Password field -->
  <label>Password *</label>
  <input v-model="form.password" type="password" @blur="validatePassword" />
  <span class="password-strength">{{ passwordStrengthLabel }}</span>
  <span class="error-text">{{ validation.password.error }}</span>
  
  <!-- Terms -->
  <label>
    <input v-model="form.agreeToTerms" type="checkbox" />
    I agree to the Terms and Privacy Policy
  </label>
  
  <!-- Submit -->
  <button type="submit" :disabled="submitButtonDisabled">
    {{ isSubmitting ? 'Creating Account...' : 'Start Trial' }}
  </button>
  
  <!-- Success message -->
  <div v-if="showVerificationPending" class="success-message">
    Check your email for verification link...
  </div>
</form>
```

---

### Component: VerificationSuccess (Vue.js)

**File:** `src/components/auth/VerificationSuccess.vue`

**Props:**
- `email` (String): Email address user verified

**Template:**
```html
<div class="verification-success">
  <h2>Check your email</h2>
  <p>We've sent a verification link to {{ email }}.</p>
  <p>Click the link to activate your trial.</p>
  <button @click="resendEmail">Resend verification email</button>
  <a href="/">Back to home</a>
</div>
```

---

## Validation Rules

| Field | Rule | Error Message |
|-------|------|---------------|
| Email | Required, valid email format, unique | "Email is required." / "Invalid email format." / "An account with this email already exists." |
| Name | Required, 2-100 characters, not only numbers | "Name is required." / "Name must be 2-100 characters." / "Name cannot be only numbers." |
| Password | Required, minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 digit | "Password is required." / "Password must be at least 8 characters." / "Password must include uppercase, lowercase, and a number." |
| Password Confirm (if required) | Must match password field | "Passwords do not match." |
| Terms | Must be checked | "You must agree to the Terms and Privacy Policy." |

---

## Error States

### Error 1: Invalid Email Format

**Trigger:** User submits form with malformed email (e.g., "user@domain" or "user@.com")

**Display:** 
- Inline error below email field: "Invalid email format."
- Submit button remains disabled until fixed
- Real-time validation as user types

---

### Error 2: Email Already Registered

**Trigger:** User enters email that exists in database

**Display:**
- Inline error below email field: "An account with this email already exists. [Forgot password link]?"
- Button to "Use a different email"
- Link to password recovery flow

---

### Error 3: Weak Password

**Trigger:** Password does not meet requirements

**Display:**
- Below password field, show requirements:
  - ✗ At least 8 characters
  - ✓ Uppercase letter
  - ✗ Lowercase letter
  - ✗ Number
- Requirements update in real-time as user types
- Submit button disabled if password does not meet all requirements

---

### Error 4: Rate Limit Exceeded

**Trigger:** User submits signup form more than 5 times from same IP in 15 minutes

**Display:**
- Form-level error message: "Too many signup attempts from your location. Please try again in 15 minutes."
- Submit button disabled
- Countdown timer showing when rate limit resets

---

### Error 5: Server Error During Signup

**Trigger:** Backend database error, email service failure, etc.

**Display:**
- Form-level error message: "Something went wrong. Please try again later."
- Submit button re-enabled so user can retry
- Technical error logged server-side; user does not see tech details

---

### Error 6: Email Verification Token Expired

**Trigger:** User clicks verification link >24 hours after signup

**Display:**
- Page headline: "This link has expired."
- Message: "Verification links expire after 24 hours. [Request a new verification email]"
- Button to resend email

---

### Error 7: Verification Token Invalid

**Trigger:** User clicks malformed or non-existent verification link

**Display:**
- Page headline: "Verification link is invalid."
- Message: "This link is not valid or has already been used. [Request a new verification email]"
- Button to resend email

---

### Error 8: Email Service Failure

**Trigger:** Email provider returns error when sending verification email

**Display:**
- User sees: "We couldn't send a verification email. Please try again in a few minutes."
- Resend button shows countdown (retry available after 60 seconds)
- Server logs error for monitoring/alerts

---

### Error 9: Too Many Resend Attempts

**Trigger:** User requests resend email more than 3 times in 1 hour

**Display:**
- Error message: "You've requested too many resend emails. Please try again in [X minutes]."
- Button disabled with countdown

---

## Success States

### Success 1: Signup Form Submitted

**Display:**
- Form replaced with "Check your email" message
- Message: "We've sent a verification link to [email]. Click the link to activate your trial."
- "Resend email" button available
- Countdown showing "Next resend available in X seconds"

---

### Success 2: Email Verified

**Display:**
- Page headline: "Email verified!"
- Message: "Your trial is now active. You can now log in to NicheLearner."
- Button: "Go to platform"
- Redirect to product login/dashboard after 3-second delay (if user doesn't click)

---

### Success 3: Verification Email Resent

**Display:**
- Temporary confirmation message: "Verification email resent to [email]"
- Message fades out after 3 seconds
- Resend button disabled with countdown (60 seconds)

