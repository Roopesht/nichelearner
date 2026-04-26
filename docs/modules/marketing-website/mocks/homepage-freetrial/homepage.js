// ============================================================================
// HOMEPAGE SCREENS
// ============================================================================

function renderHomepage(data) {
  const hero = renderHeroSection(data);
  const howItWorks = renderHowItWorksSection(data);
  const studentSection = renderStudentSection(data);
  const parentSection = renderParentSection(data);
  const trustMarkers = renderTrustMarkersSection(data);
  const ctaFinal = renderFinalCtaSection(data);
  const collegeSection = data.homepage.collegeSection.enabled ? renderCollegeSection(data) : '';

  const header = renderHeader(data);
  const footer = renderFooter();

  return `
    ${header}
    <main>
      ${hero}
      ${howItWorks}
      ${studentSection}
      ${parentSection}
      ${trustMarkers}
      ${ctaFinal}
      ${collegeSection}
    </main>
    ${footer}
  `;
}

function renderHeroSection(data) {
  const { headline, subheading, ctaText, trustPoints } = data.homepage.hero;

  return `
    <section class="hero">
      <div class="container">
        <h1>${headline}</h1>
        <p class="subheading">${subheading}</p>
        <button class="btn-primary" onclick="goTo('signup'); return false;">${ctaText}</button>
        <div class="trust-text">
          ${trustPoints.map(point => `<p>✓ ${point}</p>`).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderHowItWorksSection(data) {
  const cards = data.homepage.howItWorks.map(card => `
    <div class="card">
      <div class="card-icon">${card.icon}</div>
      <h3>${card.headline}</h3>
      <p>${card.description}</p>
    </div>
  `).join('');

  return `
    <section>
      <div class="container">
        <div class="section-header">
          <h2>How NicheLearner Works</h2>
        </div>
        <div class="grid-3">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

function renderStudentSection(data) {
  const { headline, body } = data.homepage.studentSection;

  return `
    <section class="persona-section">
      <div class="container">
        <div class="section-header">
          <h2>For Students</h2>
        </div>
        <div>
          <h3>${headline}</h3>
          <p>${body}</p>
          <button class="btn-primary" onclick="goTo('signup'); return false;">Start your free trial now</button>
        </div>
      </div>
    </section>
  `;
}

function renderParentSection(data) {
  const { headline, body } = data.homepage.parentSection;

  return `
    <section class="persona-section">
      <div class="container">
        <div class="section-header">
          <h2>For Parents</h2>
        </div>
        <div>
          <h3>${headline}</h3>
          <p>${body}</p>
          <button class="btn-primary" onclick="goTo('signup'); return false;">Help your child get started</button>
        </div>
      </div>
    </section>
  `;
}

function renderTrustMarkersSection(data) {
  const markers = data.homepage.trustMarkers.map(marker => `
    <div class="trust-marker">
      <div class="trust-marker-icon">${marker.icon}</div>
      <h3>${marker.headline}</h3>
      <p>${marker.body}</p>
    </div>
  `).join('');

  return `
    <section>
      <div class="container">
        <div class="section-header">
          <h2>Why You Can Trust NicheLearner</h2>
        </div>
        <div class="trust-markers">
          ${markers}
        </div>
      </div>
    </section>
  `;
}

function renderFinalCtaSection(data) {
  return `
    <section style="background-color: var(--color-primary-light); padding: var(--space-16) var(--space-6); text-align: center;">
      <div class="container">
        <h2>Ready to Get Honest Feedback?</h2>
        <button class="btn-primary" onclick="goTo('signup'); return false;">Start Free Trial</button>
        <p class="text-muted" style="margin-top: var(--space-4);">
          No credit card. 30 days free. Cancel anytime.
        </p>
      </div>
    </section>
  `;
}

function renderCollegeSection(data) {
  const { headline, body } = data.homepage.collegeSection;

  return `
    <section class="persona-section">
      <div class="container">
        <div class="section-header">
          <h2>For Colleges & Institutions</h2>
        </div>
        <div>
          <h3>${headline}</h3>
          <p>${body}</p>
          <button class="btn-secondary" onclick="goTo('home-institutions'); return false;">Learn about college partnerships</button>
          <p class="text-muted" style="margin-top: var(--space-4); font-size: var(--font-size-small);">Trusted by 50+ colleges</p>
        </div>
      </div>
    </section>
  `;
}
