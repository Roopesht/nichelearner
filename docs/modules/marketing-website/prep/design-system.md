# Design System: Marketing Website

This document defines the visual and interaction design system for the NicheLearner marketing website. It serves as the source of truth for typography, colour, spacing, components, and responsive design patterns.

---

## Typography

### Font Family
- **Primary:** Inter (sans-serif) — clean, modern, highly legible on screens and mobile devices
- **Fallback:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Type Scale

| Level | Use Case | Size | Weight | Line Height |
|-------|----------|------|--------|-------------|
| **h1** | Page headings, hero section title | 48px | 700 | 1.2 |
| **h2** | Section headings | 36px | 700 | 1.3 |
| **h3** | Subsection headings, card titles | 24px | 600 | 1.4 |
| **h4** | Feature titles, form labels | 18px | 600 | 1.5 |
| **Body Large** | Primary copy, introductions | 16px | 400 | 1.6 |
| **Body** | Standard paragraph text, form descriptions | 14px | 400 | 1.6 |
| **Small** | Supporting text, secondary information, captions | 12px | 400 | 1.5 |
| **Caption** | Metadata, timestamps, disclaimers | 11px | 400 | 1.4 |

### Font Weights Used
- **400** (Regular) — body copy, standard text
- **600** (Semibold) — subheadings, button labels
- **700** (Bold) — main headings, emphasis

---

## Colour Palette

### Primary Colours (Blue Theme)
- **Primary Blue:** `#2563EB` (Tailwind: `blue-600`) — CTAs, primary buttons, interactive elements
- **Primary Blue Light:** `#DBEAFE` (Tailwind: `blue-100`) — backgrounds, hover states, secondary UI
- **Primary Blue Dark:** `#1E40AF` (Tailwind: `blue-700`) — button hover, active states, dark theme accents

### Accent Colours
- **Accent Orange:** `#F97316` (Tailwind: `orange-500`) — highlight important features, secondary CTAs
- **Accent Yellow:** `#FBBF24` (Tailwind: `amber-400`) — subtle accents, icons, badges
- **Accent Orange Light:** `#FED7AA` (Tailwind: `orange-200`) — backgrounds, low-emphasis accents

### Neutral Colours (Light & Dark Theme)
#### Light Theme (Default)
- **White:** `#FFFFFF` — page background, card backgrounds
- **Gray 50:** `#F9FAFB` — subtle backgrounds, section dividers
- **Gray 100:** `#F3F4F6` — input backgrounds, disabled states
- **Gray 200:** `#E5E7EB` — borders, light dividers
- **Gray 400:** `#9CA3AF` — secondary text, placeholders
- **Gray 600:** `#4B5563` — body text
- **Gray 900:** `#111827` — headings, primary text

#### Dark Theme
- **Dark Base:** `#0F172A` (slate-900) — page background
- **Dark Surface:** `#1E293B` (slate-800) — card backgrounds
- **Dark Border:** `#334155` (slate-700) — borders, dividers
- **Dark Text:** `#F1F5F9` (slate-100) — primary text
- **Dark Text Secondary:** `#CBD5E1` (slate-300) — secondary text

### Semantic Colours
- **Success:** `#10B981` (green-500) — positive actions, confirmations, success messages
- **Warning:** `#F59E0B` (amber-500) — cautions, warnings, notifications
- **Error:** `#EF4444` (red-500) — errors, destructive actions, validation failures
- **Info:** `#3B82F6` (blue-500) — informational messages, help text

---

## Spacing

### Base Unit
- **Base:** 4px (rem-based: 0.25rem)

### Spacing Scale
Used consistently for margins, padding, and gaps:

```
0    = 0px
1    = 4px
2    = 8px
3    = 12px
4    = 16px
5    = 20px
6    = 24px
7    = 28px
8    = 32px
10   = 40px
12   = 48px
14   = 56px
16   = 64px
20   = 80px
24   = 96px
```

### Common Usage Patterns
- **Button padding:** `padding: 2.5 (10px) 4 (16px)` (vertical/horizontal)
- **Card padding:** `padding: 6 (24px)`
- **Section padding:** `padding: 12 (48px)` vertical, `6 (24px)` horizontal
- **Component gap:** `gap: 4 (16px)` or `gap: 3 (12px)`

---

## Border Radius

### Radius Scale
- **None:** `0px` — sharp corners (rarely used)
- **Small:** `4px` — buttons, small inputs, badges
- **Medium:** `8px` — cards, modals, larger inputs, form sections
- **Large:** `12px` — hero sections, major containers
- **Full:** `9999px` — pills, circular elements, full-width rounded buttons

### Application
- **Buttons:** `radius-small` (4px)
- **Input fields:** `radius-small` (4px)
- **Cards:** `radius-medium` (8px)
- **Modals/Dialogs:** `radius-medium` (8px)
- **Badges/Pills:** `radius-full` (9999px)

---

## Shadows (Elevation Levels)

### Elevation Scale
- **None:** No shadow (default)
- **sm:** `0 1px 2px 0 rgba(0, 0, 0, 0.05)` — subtle, barely visible
- **md:** `0 4px 6px -1px rgba(0, 0, 0, 0.1)` — cards, buttons on hover
- **lg:** `0 10px 15px -3px rgba(0, 0, 0, 0.1)` — modals, overlays
- **xl:** `0 20px 25px -5px rgba(0, 0, 0, 0.1)` — dropdown menus, floating panels

### Usage
- **Default cards:** `shadow-sm` or `shadow-md`
- **Button hover:** `shadow-md`
- **Modal/Dialog:** `shadow-lg`
- **Dropdown/Popover:** `shadow-lg` or `shadow-xl`
- **No shadow:** form inputs (use border instead)

---

## Core Components

### Layout Components
- **Page Container** — max-width wrapper (1280px desktop, full width mobile with padding)
- **Header/Navigation** — sticky, responsive, logo + nav links + mobile menu
- **Hero Section** — full-width background, large heading, subheading, primary CTA
- **Section** — 12 (48px) vertical padding, 6 (24px) horizontal padding
- **Card** — rounded-medium (8px), shadow-md or shadow-sm, padding 6 (24px)
- **Footer** — dark background, links, copyright, contact info

### Input Components
- **Button (Primary)** — blue-600 background, white text, padding 2.5/4, radius-small, hover: blue-700 + shadow-md
- **Button (Secondary)** — transparent, blue-600 text, blue-200 border, hover: blue-50 background
- **Button (Outline)** — transparent, gray-600 text, gray-200 border, hover: gray-100 background
- **Text Input** — gray-100 background, gray-200 border, padding 2/4, radius-small, focus: blue-500 ring
- **Password Input** — same as text input, with visibility toggle icon
- **Checkbox** — blue-600 when checked, gray-200 when unchecked, radius-small
- **Select / Dropdown** — gray-100 background, gray-200 border, arrow icon, radius-small
- **Text Area** — gray-100 background, gray-200 border, padding 3/4, radius-small, resizable

### Feedback Components
- **Toast/Notification** — fixed bottom-right, shadow-lg, auto-dismiss, supports success/error/warning/info variants
- **Alert/Banner** — full-width or inline, colored background (semantic), icon + message, dismissible
- **Badge** — small pill, padding 1/2, radius-full, various color variants (blue, gray, success, warning, error)
- **Spinner/Loading** — animated circular indicator, blue-600 color, small (24px) and medium (32px) sizes
- **Empty State** — centered, icon + heading + description + optional CTA

### Data/Display Components
- **Feature Box** — card with icon, heading, description; icon is orange-500 or yellow-400
- **Testimonial Card** — quote, author name, role, optional avatar
- **Step/Process Card** — numbered step, heading, description, connects with lines on desktop
- **Stat Block** — large number, label, optional trend indicator
- **Icon Text** — icon + label pair, for credibility markers (security, privacy, etc.)

### Overlay Components
- **Modal/Dialog** — centered, shadow-lg, close button (X), heading, content, action buttons
- **Dropdown Menu** — positioned relative to trigger, shadow-lg, list of actions, hover highlight
- **Tooltip** — small, dark background, white text, arrow pointing to trigger

---

## Icon Set

### Icon Library
- **Primary:** Heroicons v2 (simple, modern, 24px baseline)
- **Alternative:** Feather Icons (if Heroicons doesn't have needed icons)

### Icons Needed for This Module
- **Chevron Down** — dropdowns, expandable sections
- **Menu/Hamburger** — mobile navigation toggle
- **X/Close** — close modals, dismiss notifications
- **Check** — success indicators, completed steps
- **Clock** — timing-related information
- **Lock** — security/privacy indicators
- **Eye/EyeOff** — password visibility toggle
- **Arrow Right** — CTAs, next steps
- **Star** — testimonial ratings, favorites
- **Users** — community/group features
- **Target/Bullseye** — personalization messaging
- **Zap** — quick actions, key features
- **Shield** — security messaging
- **Chart** — analytics, progress
- **Mail** — email confirmations
- **Phone** — contact information

### Icon Usage
- **Size:** 24px standard, 16px for inline/small, 32px for hero sections
- **Color:** Match text color context, or use blue-600 for interactive icons
- **Alignment:** Center-aligned with text, or positioned absolutely in containers

---

## Responsive Breakpoints

### Mobile-First Breakpoints
Built for mobile-first responsive design (develop for mobile, enhance for larger screens):

| Breakpoint | Screen Size | Context |
|------------|-------------|---------|
| **sm** | 640px | Small phones (landscape), small tablets |
| **md** | 768px | Tablets (portrait) |
| **lg** | 1024px | Tablets (landscape), small desktops |
| **xl** | 1280px | Desktop |
| **2xl** | 1536px | Large desktop (optional) |

### Layout Strategy
- **Mobile (< 640px):** Single column, full-width buttons, stacked forms, no sidebars
- **Tablet (640px–1024px):** Two-column layouts, hero sections optimized for width, grid for feature cards
- **Desktop (> 1024px):** Full multi-column layouts, max-width container (1280px), side-by-side form sections
- **Navigation:** Mobile menu (hamburger), tablet menu (side navigation or top nav), desktop top navigation
- **Forms:** Single column on mobile, two columns on desktop (staggered fields)
- **Hero Section:** Full-height on desktop, 60vh on tablet, 50vh on mobile

### Critical Mobile Considerations
- **Touch targets:** Minimum 44px × 44px for buttons and interactive elements
- **Form inputs:** Full width on mobile, wider padding for easier tapping
- **Typography:** Slightly larger body text on mobile (16px → 14px is acceptable, but 16px is preferred)
- **Spacing:** Reduce vertical spacing on mobile (12 → 8), increase on desktop

---

## Forms & Input Validation

### Form Structure
- **Label + Input:** label above input (stacked), 2 (8px) gap
- **Validation messages:** error text below input in red, 1 (4px) margin-top
- **Help text:** gray-600 text, small (12px), below label or input, optional
- **Required indicator:** red asterisk (*) next to label or after label text

### Validation States
- **Idle:** gray-200 border, gray-100 background
- **Focus:** blue-500 ring (2px), blue-500 border
- **Valid:** green-500 border or checkmark icon
- **Error:** red-500 border, red text for error message
- **Disabled:** gray-100 background, gray-400 text, cursor-not-allowed

### Form Fields (Signup/Inquiry)
1. **Email:** text input, type="email", placeholder="you@example.com"
2. **Name/Full Name:** text input, type="text", placeholder="Full name"
3. **Password:** password input, type="password", visibility toggle, min 8 characters
4. **Organization/College Name:** text input (for college inquiry form)
5. **Phone (optional):** tel input, type="tel"
6. **Submit Button:** primary button, full width on mobile, 150px+ on desktop
7. **Terms of Service:** checkbox + small text link

---

## Component Customisations (if using shadcn/ui)

If implementing with shadcn/ui, the following pre-built components are used with customisations:

- **Button** — custom colors (blue-600, orange-500), custom sizes, supports icon
- **Input** — custom border color, custom focus ring color
- **Card** — custom shadow, custom radius
- **Modal/Dialog** — custom overlay opacity, custom animation
- **Dropdown Menu** — custom positioning, custom item styling
- **Badge** — custom color variants
- **Toast** — custom position (bottom-right), custom duration

Custom theme configuration should override Tailwind defaults to match this design system.

---

## Visual Hierarchy & Emphasis

### Primary Actions (Key CTAs)
- Blue-600 button, white text, bold label (600 weight)
- Examples: "Start Free Trial," "Try for Free," "Sign Up Now," "Contact Us"

### Secondary Actions
- Outlined button, blue-600 text, gray-200 border
- Examples: "Learn More," "View Details"

### Tertiary Actions
- Text link, blue-600 color, underline on hover
- Examples: "FAQ," "Privacy Policy," "Contact"

### Key Information
- h2 or h3 heading in gray-900 (light) / slate-100 (dark)
- Supporting body text in gray-600 (light) / slate-300 (dark)
- Accent color (orange-500) for highlights or key differentiators

### De-emphasized Content
- small or caption text in gray-400 (light) / slate-400 (dark)
- Examples: disclaimers, secondary information, timestamps

---

## Accessibility Considerations

- **Colour contrast:** All text meets WCAG AA standards (4.5:1 for body text, 3:1 for large text)
- **Focus indicators:** Visible blue ring on all interactive elements
- **Alt text:** All images have descriptive alt text; decorative images use alt=""
- **Form labels:** All form inputs have associated `<label>` elements or aria-label
- **Semantic HTML:** Use `<button>`, `<input>`, `<select>` for proper keyboard navigation
- **Button text:** All buttons have meaningful text (not just icons)
- **Skip links:** "Skip to content" link available on page (optional but recommended)
- **Mobile:** Touch targets at least 44px × 44px

---

## Dark Mode

The design system fully supports dark mode. Key differences:

- **Background:** Dark surfaces (slate-900, slate-800) replace white
- **Text:** Light text (slate-100, slate-300) replaces dark gray
- **Borders:** Lighter borders (slate-700) for visibility on dark backgrounds
- **Shadows:** Slightly adjusted opacity for dark surfaces
- **Accent colors:** Blue, orange, yellow remain the same but may appear slightly different against dark backgrounds
- **Toggle:** Dark mode toggle in header (optional), respects system preference (prefers-color-scheme)

### Implementation
- Use CSS variables or Tailwind dark mode class (`dark:` prefix)
- Test all colours in both light and dark modes
- Ensure contrast ratios remain accessible in dark mode

---

## Notes & Future Refinements

1. **Wireframes:** This design system should be paired with detailed wireframes or Figma designs for each page (homepage, signup, college partnerships, institutional inquiry).
2. **Component library:** Consider building reusable Vue.js components based on this system (buttons, inputs, cards, modals).
3. **Design tokens:** Export colour, spacing, and typography as design tokens for frontend development.
4. **Brand consistency:** All marketing materials (emails, forms, CTAs) should follow this system.
5. **Performance:** Use system fonts or optimized font loading (e.g., font-display: swap) to minimize layout shifts.
6. **Testing:** Test all components in light and dark mode, on mobile (iOS/Android), tablet, and desktop.
