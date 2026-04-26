// ============================================================================
// APP ROUTER & MAIN LOGIC
// ============================================================================

let appData = null;

async function initApp() {
  try {
    const response = await fetch('./data.json');
    appData = await response.json();
    window.appData = appData;

    // Parse URL for navigation
    const path = window.location.hash || '#/';
    const screen = path.substring(2) || 'homepage';
    goTo(screen);
  } catch (error) {
    console.error('Failed to load app data:', error);
    document.body.innerHTML = '<p>Error loading app. Please refresh.</p>';
  }
}

function goTo(screen, params = {}) {
  const app = document.getElementById('app');
  if (!app) return;

  let html = '';

  switch (screen) {
    case 'homepage':
      html = renderHomepage(appData);
      updateAppState({ currentScreen: 'homepage' });
      break;

    case 'signup':
      html = renderSignupForm(appData);
      updateAppState({ currentScreen: 'signup' });
      break;

    case 'verify-email':
      html = renderVerificationPending(appData);
      updateAppState({ currentScreen: 'verify-email' });
      break;

    case 'email-verified':
      html = renderEmailVerified(appData, params.email);
      updateAppState({ currentScreen: 'email-verified' });
      break;

    case 'home-institutions':
      alert('Institutional partnerships page (not yet implemented in this mock)');
      return;

    case 'login':
      alert('Login page (not yet implemented in this mock)');
      return;

    default:
      html = renderHomepage(appData);
      updateAppState({ currentScreen: 'homepage' });
  }

  app.innerHTML = html;
  window.scrollTo(0, 0);

  // Attach event listeners after DOM update
  attachEventListeners();
}

function attachEventListeners() {
  // Email input validation
  const emailInput = document.getElementById('email');
  if (emailInput) {
    emailInput.addEventListener('blur', validateEmailInput);
  }

  // Name input validation
  const nameInput = document.getElementById('name');
  if (nameInput) {
    nameInput.addEventListener('blur', validateNameInput);
  }

  // Password input validation
  const passwordInput = document.getElementById('password');
  if (passwordInput) {
    passwordInput.addEventListener('input', validatePasswordInput);
    passwordInput.addEventListener('blur', validatePasswordInput);
  }

  // Password visibility toggle
  const toggleBtn = document.querySelector('.password-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', togglePasswordVisibility);
  }

  // Terms checkbox
  const termsCheckbox = document.getElementById('terms');
  if (termsCheckbox) {
    termsCheckbox.addEventListener('change', updateFormValidity);
  }

  // Form submission
  const form = document.getElementById('signup-form');
  if (form) {
    form.addEventListener('submit', handleSignupSubmit);
  }

  // Resend email button
  const resendBtn = document.getElementById('resend-email-btn');
  if (resendBtn) {
    resendBtn.addEventListener('click', handleResendEmail);
  }

  // Auto-redirect from email verified screen
  if (document.getElementById('email-verified-screen')) {
    setTimeout(() => {
      // Auto-redirect after 3 seconds (user can click before then)
      // In a real app, would redirect to app.nichelearner.com/login
    }, 3000);
  }
}

function validateEmailInput() {
  const email = document.getElementById('email').value;
  const errorSpan = document.getElementById('email-error');
  const inputEl = document.getElementById('email');

  if (!email) {
    updateFieldError('email', 'Email is required.', errorSpan, inputEl);
    return;
  }

  if (!validateEmail(email)) {
    updateFieldError('email', 'Invalid email format.', errorSpan, inputEl);
    return;
  }

  // Simulate email uniqueness check
  if (email === 'existing@example.com') {
    updateFieldError('email', 'An account with this email already exists.', errorSpan, inputEl);
    return;
  }

  clearFieldError('email', errorSpan, inputEl);
  updateFormValidity();
}

function validateNameInput() {
  const name = document.getElementById('name').value;
  const errorSpan = document.getElementById('name-error');
  const inputEl = document.getElementById('name');
  const validation = validateName(name);

  if (validation.valid) {
    clearFieldError('name', errorSpan, inputEl);
  } else {
    updateFieldError('name', validation.error, errorSpan, inputEl);
  }

  updateFormValidity();
}

function validatePasswordInput() {
  const password = document.getElementById('password').value;
  const errorSpan = document.getElementById('password-error');
  const inputEl = document.getElementById('password');
  const validation = validatePassword(password);

  // Update password strength
  const strengthSpan = document.getElementById('password-strength');
  if (strengthSpan) {
    strengthSpan.textContent = `Strength: ${validation.strength.charAt(0).toUpperCase() + validation.strength.slice(1)}`;
    strengthSpan.className = `password-strength ${validation.strength}`;
  }

  // Update requirements checklist
  updatePasswordRequirements(validation.requirements);

  if (password && !validation.valid) {
    updateFieldError('password', validation.error, errorSpan, inputEl);
  } else {
    clearFieldError('password', errorSpan, inputEl);
  }

  updateFormValidity();
}

function updatePasswordRequirements(requirements) {
  const listItems = document.querySelectorAll('.password-requirements li');
  listItems.forEach((li, index) => {
    const keys = Object.keys(requirements);
    const key = keys[index];
    if (requirements[key]) {
      li.classList.remove('unmet');
      li.classList.add('met');
      li.innerHTML = '✓ ' + li.textContent.substring(2);
    } else {
      li.classList.remove('met');
      li.classList.add('unmet');
      li.innerHTML = '✗ ' + li.textContent.substring(2);
    }
  });
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  this.textContent = isPassword ? '🙈' : '👁';
}

function updateFieldError(fieldName, errorMsg, errorSpan, inputEl) {
  if (errorSpan) errorSpan.textContent = errorMsg;
  if (inputEl) inputEl.classList.add('error');
  appData.signup.validation[fieldName] = { valid: false, error: errorMsg };
}

function clearFieldError(fieldName, errorSpan, inputEl) {
  if (errorSpan) errorSpan.textContent = '';
  if (inputEl) inputEl.classList.remove('error');
  appData.signup.validation[fieldName] = { valid: true, error: '' };
}

function updateFormValidity() {
  const emailValid = appData.signup.validation.email.valid;
  const nameValid = appData.signup.validation.name.valid;
  const passwordValid = appData.signup.validation.password.valid;
  const termsChecked = document.getElementById('terms')?.checked;

  const submitBtn = document.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = !(emailValid && nameValid && passwordValid && termsChecked);
  }
}

async function handleSignupSubmit(event) {
  event.preventDefault();

  // Final validation
  validateEmailInput();
  validateNameInput();
  validatePasswordInput();

  const emailValid = appData.signup.validation.email.valid;
  const nameValid = appData.signup.validation.name.valid;
  const passwordValid = appData.signup.validation.password.valid;
  const termsChecked = document.getElementById('terms').checked;

  if (!(emailValid && nameValid && passwordValid && termsChecked)) {
    return;
  }

  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;

  const submitBtn = document.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="loading-spinner"></span> Creating Account...';

  try {
    appData.signup.isSubmitting = true;
    const result = await apiSimulation('/api/auth/signup', 'POST', { email, name, password });

    appData.signup.form = { email: '', name: '', password: '', agreeToTerms: false };
    appData.verification.email = email;
    appData.verification.resendCount = 0;
    appData.verification.nextResendTime = new Date(Date.now() + 60000);

    goTo('verify-email');
  } catch (error) {
    const errorBanner = document.querySelector('.error-banner');
    if (errorBanner) {
      errorBanner.textContent = error.message || 'Signup failed. Please try again.';
      errorBanner.classList.remove('hidden');
    }
    submitBtn.disabled = false;
    submitBtn.textContent = 'Start Trial';
    appData.signup.isSubmitting = false;
  }
}

async function handleResendEmail() {
  const btn = document.getElementById('resend-email-btn');
  if (!btn) return;

  btn.disabled = true;
  btn.innerHTML = '<span class="loading-spinner"></span> Sending...';

  try {
    await apiSimulation('/api/auth/resend-verification', 'POST', {
      email: appData.verification.email
    });

    appData.verification.resendCount++;
    appData.verification.nextResendTime = new Date(Date.now() + 60000);

    // Show countdown
    startResendCountdown();

    const message = document.querySelector('.success-banner');
    if (message) {
      message.classList.remove('hidden');
      message.textContent = `Verification email resent to ${appData.verification.email}`;
      setTimeout(() => {
        message.classList.add('hidden');
      }, 3000);
    }
  } catch (error) {
    const errorBanner = document.querySelector('.error-banner');
    if (errorBanner) {
      errorBanner.textContent = error.message || 'Failed to resend email.';
      errorBanner.classList.remove('hidden');
    }
    btn.disabled = false;
    btn.innerHTML = 'Resend verification email';
  }
}

function startResendCountdown() {
  const btn = document.getElementById('resend-email-btn');
  if (!btn) return;

  let secondsLeft = 60;
  btn.disabled = true;

  const countdown = setInterval(() => {
    secondsLeft--;
    const timer = document.querySelector('.countdown-timer');
    if (timer) {
      timer.textContent = `(${secondsLeft}s)`;
    }

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      btn.disabled = false;
      btn.innerHTML = 'Resend verification email';
      if (timer) timer.textContent = '';
    }
  }, 1000);
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
