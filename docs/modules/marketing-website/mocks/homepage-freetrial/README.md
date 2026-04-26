# NicheLearner Marketing Website & Free Trial Mockup

Interactive, modular HTML mockup of the NicheLearner marketing website homepage and free trial signup flow.

## File Structure

```
homepage-freetrial/
├── index.html                      # Entry point (loads all scripts)
├── app.js                          # Router, form validation, API simulation
├── shared.js                       # Header, footer, utility functions
├── homepage.js                     # Homepage screens and sections
├── free-trial-signup-form.js       # Signup, verification pending, email verified screens
├── styles.css                      # Complete styling (design system compliance)
├── data.json                       # Sample data (user-editable)
└── README.md                       # This file
```

## How to Run

### Quick Start (Local Server)

```bash
cd docs/modules/marketing-website/mocks/homepage-freetrial/
python3 -m http.server 8000
# Then open http://localhost:8000 in your browser
```

Or using Node.js:

```bash
npx http-server .
# Then open http://localhost:8080 in your browser
```

### Features

✅ **Fully Interactive**
- All buttons, forms, navigation working
- Real-time form validation
- Email, name, password strength checking
- Terms checkbox requirement enforcement

✅ **Responsive Design**
- Mobile-first layout (320px and up)
- Grid layouts adapt at breakpoints (640px, 768px, 1024px)
- Touch-friendly buttons (44px minimum)

✅ **Design System Compliance**
- Color palette: Primary blue (#2563EB), accent orange, neutral grays
- Typography: Inter font, semantic heading hierarchy
- Spacing: 4px base unit throughout
- Components: Buttons, inputs, cards, grids all styled

✅ **Modular Architecture**
- One function per screen
- Router pattern (`goTo(screenName)`)
- Shared components in `shared.js`
- All styling in `styles.css`

## Screens Implemented

### Homepage (`/`)

- **Hero Section** — main headline, subheading, primary CTA
- **How It Works** — 3-column card grid (responsive)
- **For Students** — student-specific messaging
- **For Parents** — parent-specific messaging
- **Trust Markers** — security, privacy, pricing transparency
- **Final CTA** — second call-to-action
- **College Partnerships** — institutional offering

### Signup Form (`/signup`)

- Email validation (format + uniqueness simulation)
- Name validation (2-100 characters, no numbers-only)
- Password strength meter with live requirements checklist
- Password visibility toggle
- Terms checkbox (required to submit)
- Real-time validation with error messages
- Form submission disabled during API call (simulated)

### Verification Pending (`/verify-email`)

- Success message with email address
- Resend email button with 60-second cooldown
- Countdown timer
- Back to home link

### Email Verified (`/email-verified`)

- Trial activation confirmation
- Trial dates (start + 30 days end)
- Buttons to go to platform or return home
- Auto-redirect message (3-second delay, mock)

## Data-Driven Content

All content is in `data.json`. Edit to change:

- Hero headline and subheading
- "How It Works" card titles and descriptions
- Student/parent messaging
- Trust markers (security, privacy, pricing)
- College section text

**Example**: To change the hero headline, edit `data.json`:

```json
{
  "homepage": {
    "hero": {
      "headline": "Your new headline here"
    }
  }
}
```

Then reload the page.

## Form Validation Rules

| Field | Rules | Example Error |
|-------|-------|---|
| Email | Required, valid format, unique | "Invalid email format." |
| Name | 2-100 chars, not numbers-only | "Name must be 2-100 characters." |
| Password | 8+ chars, uppercase, lowercase, digit | "Must include uppercase, lowercase, and number." |
| Terms | Must be checked | (submit button disabled) |

## API Simulation

The mockup simulates API calls with 800ms delay:

- `POST /api/auth/signup` — creates account, returns user_id
- `GET /api/auth/check-email` — validates email uniqueness
- `POST /api/auth/resend-verification` — resends verification email

Duplicate email: `existing@example.com` (try signing up with it)

## Color Scheme

```
Primary Blue:     #2563EB
Primary Light:    #DBEAFE
Primary Dark:     #1E40AF
Accent Orange:    #F97316
Gray 900 (text):  #111827
Gray 600 (muted): #4B5563
Gray 100 (bg):    #F3F4F6
```

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px–1024px
- **Desktop**: > 1024px

## Navigation

All navigation is via `goTo(screenName)`:

```javascript
goTo('homepage')        // Home page
goTo('signup')         // Signup form
goTo('verify-email')   // Verification pending
goTo('email-verified') // Email verified success
```

## Features NOT Yet Implemented

- Actual backend API calls (simulated instead)
- Dark mode (design system supports it, CSS variables in place)
- i18n/localization (structure supports it)
- Analytics event tracking (design planned, not wired up)
- Password reset flow
- College institutional signup
- Login page

## Testing Tips

1. **Test responsive design**: Open DevTools (F12) → Toggle device toolbar → test at mobile, tablet, desktop sizes
2. **Test form validation**: Try invalid emails, short passwords, empty fields
3. **Test form state**: Fill form partially, leave page, return to form (clears on signup success)
4. **Test duplicate email**: Use `existing@example.com` as email to see error
5. **Test password strength**: Type password with different combinations to see strength meter update
6. **Test resend countdown**: Click "Resend" button to see 60-second countdown

## Code Quality

- Clean, commented code
- No external dependencies (vanilla JS, CSS)
- Accessible (semantic HTML, ARIA-friendly)
- Mobile-first CSS
- Modular file structure (easy to extend)

## Future Enhancements

1. Add backend API integration
2. Implement dark mode toggle
3. Add analytics tracking
4. Create college partnership inquiry form
5. Add testimonials carousel
6. Implement password reset flow
7. Add email input autocomplete
8. Create admin panel to manage homepage content

## License

Part of NicheLearner project. Internal use only.

---

**Questions?** Check the design system doc at `../design-system.md` or review the specification files.
