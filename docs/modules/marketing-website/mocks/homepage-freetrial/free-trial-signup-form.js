// ============================================================================
// FREE TRIAL SIGNUP FORM SCREENS
// ============================================================================

function renderSignupForm(data) {
  const header = renderHeader(data);
  const footer = renderFooter();

  return `
    ${header}
    <div class="signup-container">
      <div class="signup-content">
        <div class="signup-hero">
          <h1>Start your free trial</h1>
          <p>Get honest feedback on your prep</p>
          <p class="text-muted">No credit card required. 30-day free access.</p>
        </div>

        <div class="form-wrapper">
          <form id="signup-form">
            <div class="error-banner hidden" style="margin-bottom: var(--space-4);">
              <!-- Error message will be inserted here -->
            </div>

            <!-- Email Field -->
            <div class="form-group">
              <label for="email" class="label-required">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value="${data.signup.form.email}"
                required
              />
              <span class="form-error" id="email-error"></span>
            </div>

            <!-- Name Field -->
            <div class="form-group">
              <label for="name" class="label-required">Full name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value="${data.signup.form.name}"
                required
              />
              <span class="form-error" id="name-error"></span>
            </div>

            <!-- Password Field with Visibility Toggle -->
            <div class="form-group">
              <label for="password" class="label-required">Password</label>
              <div class="password-input-wrapper">
                <input
                  id="password"
                  type="password"
                  placeholder="Minimum 8 characters"
                  value="${data.signup.form.password}"
                  required
                />
                <button type="button" class="password-toggle">👁</button>
              </div>
              <span class="password-strength" id="password-strength">Strength: Weak</span>
              <span class="form-error" id="password-error"></span>
              <div class="password-requirements">
                <ul>
                  <li class="unmet">✗ At least 8 characters</li>
                  <li class="unmet">✗ Uppercase letter</li>
                  <li class="unmet">✗ Lowercase letter</li>
                  <li class="unmet">✗ Number</li>
                </ul>
              </div>
            </div>

            <!-- Terms & Privacy -->
            <div class="terms-checkbox">
              <input
                id="terms"
                type="checkbox"
                ${data.signup.form.agreeToTerms ? 'checked' : ''}
                required
              />
              <label for="terms">
                I agree to the <a href="#" onclick="openLink('terms'); return false;">Terms of Service</a>
                and <a href="#" onclick="openLink('privacy'); return false;">Privacy Policy</a>
              </label>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn-primary btn-block" style="margin-top: var(--space-4);">
              Start Trial
            </button>
          </form>

          <!-- Trust Text -->
          <div class="form-trust-text">
            <p>✓ No credit card required</p>
            <p>✓ 30-day free trial</p>
            <p>✓ Cancel anytime</p>
          </div>
        </div>
      </div>
    </div>
    ${footer}
  `;
}

function renderVerificationPending(data) {
  const header = renderHeader(data);
  const footer = renderFooter();
  const email = data.verification.email || 'your-email@example.com';

  return `
    ${header}
    <div class="verification-container">
      <div class="verification-content">
        <div class="verification-icon">✓</div>

        <div class="pending-message">
          <h3>Check your email</h3>
          <p>We've sent a verification link to <strong>${email}</strong></p>
          <p>Click the link to activate your trial.</p>

          <ul>
            <li>You should receive the email in a few seconds</li>
            <li>Your trial begins once you verify your email</li>
            <li>Didn't see the email? Check your spam folder</li>
          </ul>
        </div>

        <div class="verification-actions">
          <button
            id="resend-email-btn"
            class="btn-primary"
            style="width: 100%;"
          >
            Resend verification email
            <span class="countdown-timer"></span>
          </button>
          <button
            class="btn-secondary"
            onclick="goTo('homepage'); return false;"
            style="width: 100%;"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
    ${footer}
  `;
}

function renderEmailVerified(data, email = null) {
  const header = renderHeader(data);
  const footer = renderFooter();
  const verificationEmail = email || data.verification.email || 'your-email@example.com';

  // Calculate trial dates (30 days from now)
  const today = new Date();
  const end = new Date(today);
  end.setDate(end.getDate() + 30);

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const startDate = today.toLocaleDateString('en-US', dateOptions);
  const endDate = end.toLocaleDateString('en-US', dateOptions);

  return `
    ${header}
    <div class="verification-container" id="email-verified-screen">
      <div class="verification-content">
        <div class="verification-icon">✓</div>

        <div class="verification-message">
          <h2>Email verified!</h2>
          <p>Your trial is now active.</p>

          <div class="trial-dates">
            <p>Trial Duration</p>
            <p>Start: ${startDate}</p>
            <p>End: ${endDate} (30 days)</p>
          </div>

          <p style="margin-top: var(--space-4); border-top: 1px solid var(--color-gray-200); padding-top: var(--space-4);">
            You can now log in to NicheLearner and start your adaptive quiz experience.
          </p>
        </div>

        <div class="verification-actions">
          <button
            class="btn-primary"
            onclick="alert('Redirecting to app.nichelearner.com/login'); return false;"
            style="width: 100%;"
          >
            Go to Platform
          </button>
          <button
            class="btn-secondary"
            onclick="goTo('homepage'); return false;"
            style="width: 100%;"
          >
            Back to Home
          </button>
        </div>

        <p class="text-muted" style="margin-top: var(--space-6); font-size: var(--font-size-small); text-align: center;">
          (Auto-redirect to platform in 3 seconds...)
        </p>
      </div>
    </div>
    ${footer}
  `;
}
