// ============================================================================
// SHARED COMPONENTS - Header, Footer, Navigation
// ============================================================================

function renderHeader(data) {
  const navLinks = `
    <a href="#" onclick="goTo('home-institutions'); return false;">For Institutions</a>
    <a href="#" onclick="goTo('login'); return false;">Login</a>
  `;

  return `
    <header>
      <nav class="navbar">
        <div class="navbar-logo" onclick="goTo('homepage'); return false;">NicheLearner</div>
        <div class="navbar-links">
          ${navLinks}
        </div>
      </nav>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer>
      <div class="footer-content">
        <div class="footer-links">
          <a href="#" onclick="openLink('privacy'); return false;">Privacy Policy</a>
          <a href="#" onclick="openLink('terms'); return false;">Terms of Service</a>
          <a href="#" onclick="openLink('contact'); return false;">Contact Us</a>
          <a href="#" onclick="openLink('faq'); return false;">FAQ</a>
        </div>
        <div class="footer-copyright">
          © 2026 NicheLearner. All rights reserved.
        </div>
      </div>
    </footer>
  `;
}

function openLink(page) {
  alert(`Opening ${page} in new tab/window (mock)`);
}

function updateAppState(updates) {
  Object.assign(window.appData.appState, updates);
}

function getAppState() {
  return window.appData.appState;
}

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get('utm_source') || params.get('ref') || 'organic',
    medium: params.get('utm_medium'),
    campaign: params.get('utm_campaign')
  };
}

// Form validation helpers
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateName(name) {
  if (!name || name.length < 2 || name.length > 100) {
    return { valid: false, error: 'Name must be 2-100 characters.' };
  }
  if (/^\d+$/.test(name)) {
    return { valid: false, error: 'Name cannot be only numbers.' };
  }
  return { valid: true, error: '' };
}

function validatePassword(password) {
  const requirements = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password)
  };

  const allMet = Object.values(requirements).every(v => v);
  const strength = getPasswordStrength(requirements);

  return {
    valid: allMet,
    error: allMet ? '' : 'Password must be at least 8 characters with uppercase, lowercase, and number.',
    strength,
    requirements
  };
}

function getPasswordStrength(requirements) {
  const metCount = Object.values(requirements).filter(v => v).length;
  if (metCount <= 1) return 'weak';
  if (metCount <= 2) return 'medium';
  return 'strong';
}

function formatDateRange(startDate, days = 30) {
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(end.getDate() + days);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return {
    start: start.toLocaleDateString('en-US', options),
    end: end.toLocaleDateString('en-US', options)
  };
}

// Simulate API calls (with delay)
async function apiSimulation(endpoint, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (endpoint === '/api/auth/signup') {
        const { email, name, password } = body;

        // Simulate duplicate email check
        if (email === 'existing@example.com') {
          reject({ status: 409, message: 'An account with this email already exists.' });
          return;
        }

        resolve({
          user_id: 'usr_' + Math.random().toString(36).substr(2, 9),
          email,
          status: 'trial_pending_verification',
          verification_sent_at: new Date().toISOString()
        });
      } else if (endpoint === '/api/auth/check-email') {
        resolve({
          email: body.email,
          registered: body.email === 'existing@example.com',
          account_status: body.email === 'existing@example.com' ? 'trial_active' : null
        });
      }
    }, 800);
  });
}
