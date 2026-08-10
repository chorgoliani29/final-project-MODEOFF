# MODE:OFF — Technical Specification

**Project Type:** Frontend-only web platform
**Stage:** Content planning & structuring
**Technology:** HTML5, CSS3, JavaScript
**Backend:** None
**Primary Goal:** Provide an engaging digital space that encourages users to step away from passive scrolling and discover enjoyable offline activities.

---

## 1. Project Overview & Goals

### 1.1 Concept

**MODE:OFF** is a lightweight web platform designed around the idea of disconnecting from endless digital consumption and spending free time more intentionally.

Rather than functioning as another social-media-style platform, MODE:OFF should help users discover **activities, events, ideas, and experiences** that encourage relaxation, creativity, social interaction, and offline engagement.

The website should feel:

- Calm and welcoming
- Modern and visually engaging
- Simple to navigate
- Informative without being overwhelming
- Interactive without becoming distracting

### 1.2 Value Proposition

MODE:OFF answers a simple question:

> **"What can I do instead of scrolling?"**

The platform gives users practical alternatives such as:

- Creative activities
- Social activities
- Relaxation ideas
- Games
- Events
- Outdoor activities
- Personal development activities
- Offline hobbies

### 1.3 Target Audience

The primary audience is people who:

- Have free time but don't know what to do with it
- Want alternatives to social media and endless scrolling
- Enjoy discovering new activities
- Want to relax or socialize
- Are interested in hobbies and offline experiences

The interface should therefore work well for both **desktop and mobile users**.

### 1.4 Main Project Goals

1. Present useful activity-related content clearly.
2. Make discovering activities quick and enjoyable.
3. Encourage users to spend less time passively scrolling.
4. Provide a simple interactive form.
5. Demonstrate strong frontend development using HTML, CSS, and JavaScript.
6. Keep the initial architecture lightweight and easy to extend.

---

# 2. Site Structure & Content

## 2.1 Global Structure

Recommended navigation:

```text
MODE:OFF
│
├── Home
├── Activities
├── About
└── Contact / Join
```

A consistent header and footer should be present across all pages.

### Header

The header should contain:

- MODE:OFF logo
- Main navigation
- Mobile navigation menu
- Optional primary CTA such as **"Find an Activity"**

### Footer

The footer can contain:

- MODE:OFF logo/name
- Short description
- Navigation links
- Contact information
- Social links, if applicable
- Copyright
- Optional slogan

---

## 2.2 Home Page

**Purpose:** Introduce the concept and immediately encourage exploration.

### Recommended content blocks

#### Hero Section

Main message explaining the concept.

Example structure:

```text
MODE:OFF

Disconnect from the scroll.
Reconnect with your time.

[Explore Activities]
```

The hero should contain a strong visual identity and a clear CTA.

#### What is MODE:OFF?

A short explanation of the platform and its purpose.

#### Activity Categories

Display major categories as cards:

- 🎨 Creative
- 🧩 Games
- 🌿 Outdoor
- 👥 Social
- 🧘 Relax
- 📚 Learn

Each card should link to the relevant Activities section.

#### Featured Activities

Display several highlighted activities with:

- Image/illustration
- Activity name
- Short description
- Category
- Estimated duration
- Difficulty/energy level
- CTA

#### Why Go MODE:OFF?

A short value section explaining the benefits of replacing passive scrolling with intentional activities.

#### Final CTA

Example:

```text
Ready to switch modes?

[Explore Activities]
```

---

# 2.3 Activities Page

**Purpose:** Provide the main activity discovery experience.

Activities should be represented as reusable cards.

### Activity Card

Each card can contain:

```text
Image
Activity name
Category
Short description
Duration
Energy level
[View Activity]
```

### Suggested Filters

JavaScript can provide client-side filtering by:

- Category
- Duration
- Indoor / Outdoor
- Solo / Group
- Energy level

Example:

```text
All | Creative | Social | Relax | Outdoor | Games
```

### Activity Details

For the initial frontend version, activity details can either:

1. Expand inside the same page, or
2. Open a dedicated activity detail page.

An activity detail should include:

- Title
- Description
- Required materials
- Estimated time
- Number of participants
- Instructions
- Tips
- Related activities

---

# 2.4 About Page

**Purpose:** Explain the philosophy behind MODE:OFF.

Recommended sections:

### Our Idea

Explain why MODE:OFF exists.

### The Problem

Describe the modern habit of automatically filling free time with scrolling.

### Our Approach

Explain that MODE:OFF does not necessarily tell users to completely abandon technology. Instead, it provides alternatives for spending free time more intentionally.

### Our Principles

For example:

- Less passive consumption
- More real experiences
- More creativity
- More connection
- More intentional free time

### Brand / Visual Identity

Optional section explaining the meaning behind the MODE:OFF identity.

---

# 2.5 Contact / Form Page

**Purpose:** Allow visitors to interact with the platform.

The initial version can use a frontend-only form for:

- Activity registration
- Activity suggestions
- Feedback
- General contact

A simple implementation could use one form with a purpose selector.

Example:

```text
Name
Email
Purpose
Message
[Submit]
```

Possible purpose options:

```text
Join an activity
Suggest an activity
Give feedback
General question
```

Because there is no backend, submitted information cannot actually be stored or delivered to an administrator in the initial version.

The UI should clearly communicate this limitation if the form is presented as a real contact form.

---

# 3. Form Functionality

## 3.1 Frontend-Only Architecture

The form will operate entirely in the browser.

```text
User
  ↓
HTML Form
  ↓
JavaScript
  ↓
Validation
  ↓
Success / Error UI
```

No server request is required.

## 3.2 HTML Validation

Use native HTML5 validation wherever possible.

Examples:

```html
<input type="text" required />
<input type="email" required />
<textarea required></textarea>
```

Additional attributes:

- `minlength`
- `maxlength`
- `pattern`
- `type="email"`

JavaScript should provide a second layer of validation for improved UX.

## 3.3 JavaScript Validation

On submission:

1. Prevent the default form submission.
2. Read input values.
3. Trim unnecessary whitespace.
4. Validate required fields.
5. Validate email format.
6. Validate message length.
7. Display appropriate errors.
8. If valid, display a success state.

Pseudo-flow:

```text
Submit
  ↓
Validate
  ├── Invalid → Show errors
  │
  └── Valid
       ↓
   Show success state
       ↓
   Reset form
```

## 3.4 Error State

Errors should appear close to the relevant field.

Example:

```text
Email
[invalid@email]

Please enter a valid email address.
```

The form should not simply display a generic:

> "Something went wrong."

Instead, users should know exactly what needs to be corrected.

## 3.5 Success State

After successful validation:

```text
✓ Thank you!

Your form has been submitted successfully.
```

However, because there is no backend, the wording should avoid falsely implying that the information has been sent to a server.

A more technically accurate initial-version message would be:

> **Thanks! Your response has been received by this page. In the current demo version, no information is sent to a server.**

Alternatively, if the project is intended purely as a visual prototype, the form can simulate a successful submission.

## 3.6 Optional Local Storage

JavaScript may optionally use `localStorage` for simple browser-side persistence.

For example:

```text
Form submission
      ↓
localStorage
      ↓
Data remains in this browser
```

This should only be used for non-sensitive demo/prototype information.

---

# 4. Interactivity & UX Details

JavaScript should enhance the experience rather than make the website unnecessarily complicated.

## 4.1 Activity Filtering

The Activities page can dynamically filter cards.

Example:

```javascript
filterActivities("creative");
```

The page should update without refreshing.

## 4.2 Search

A client-side search field could allow users to search activity names and descriptions.

Example:

```text
What do you feel like doing?

[ creative, relaxing, outdoors... ]
```

Results update as the user types.

## 4.3 Activity Details

Cards can use JavaScript to:

- Expand/collapse details
- Open modal windows
- Display additional information
- Navigate between related activities

## 4.4 Navigation

JavaScript can control:

- Mobile menu
- Menu open/close states
- Active navigation state
- Smooth scrolling
- Sticky navigation behavior

## 4.5 Animations

Use subtle animations for:

- Page elements entering the viewport
- Cards appearing
- Buttons
- Hover states
- Modal transitions
- Navigation

Animations should be **short and purposeful**.

Avoid excessive motion because the site's purpose is partly to encourage users to escape overstimulation.

Respect the user's accessibility preference:

```css
@media (prefers-reduced-motion: reduce) {
  /* Reduce or disable non-essential animations */
}
```

## 4.6 UI States

Interactive components should have clear states:

```text
Default
   ↓
Hover
   ↓
Active
   ↓
Focus
   ↓
Disabled
```

Keyboard focus states should remain visible for accessibility.

## 4.7 Responsive Design

The site should follow a mobile-first approach.

Recommended breakpoints can be established during implementation rather than hard-coded into the specification.

The layout should adapt for:

- Mobile
- Tablet
- Desktop

Activity cards should change from a multi-column grid to fewer columns or a single column depending on available width.

---

# 5. Future Scope

The frontend-only version should be structured so that a backend can be added later without rebuilding the entire UI.

## 5.1 Backend Integration

A future backend could provide:

- User accounts
- Database storage
- Activity registration
- Contact form submissions
- Event management
- User profiles

Possible architecture:

```text
Frontend
HTML / CSS / JS
       ↓
REST API / Backend
       ↓
Database
```

## 5.2 User Accounts

Potential features:

- Registration/login
- Personal activity lists
- Favorites
- Activity history
- Personalized recommendations

## 5.3 Real Event Registration

The current frontend form could eventually become a real registration system.

Example:

```text
Activity
   ↓
Available dates
   ↓
Available places
   ↓
User registration
   ↓
Database
```

## 5.4 Content Management System

A CMS could allow administrators to create and manage:

- Activities
- Events
- Categories
- Images
- Articles
- Announcements

This would eliminate the need to manually modify HTML whenever content changes.

## 5.5 Recommendations

A future recommendation system could suggest activities based on:

- User interests
- Available time
- Location
- Group size
- Energy level
- Previous activity choices

Example:

```text
"I have 30 minutes"
        +
"I want something relaxing"
        ↓
Recommended activities
```

## 5.6 Analytics

Future analytics could measure:

- Most viewed activities
- Most popular categories
- Form submissions
- CTA interactions
- Search behavior
- Returning users

Analytics should be implemented with appropriate privacy considerations.

---

# Technical Architecture Summary

### Initial Version

```text
MODE:OFF
│
├── HTML5
│   ├── Semantic structure
│   ├── Forms
│   └── Content
│
├── CSS3
│   ├── Responsive layout
│   ├── Design system
│   ├── Components
│   └── Animations
│
└── JavaScript
    ├── Form validation
    ├── Activity filtering
    ├── Search
    ├── Navigation
    ├── UI states
    └── Local interactions
```

### Recommended File Structure

```text
mode-off/
│
├── index.html
├── activities.html
├── about.html
├── contact.html
│
├── css/
│   ├── style.css
│   ├── components.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── activities.js
│   └── form.js
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo/
│
└── README.md
```

### Development Priority

**Phase 1 — Structure**

- HTML pages
- Navigation
- Content hierarchy
- Activity data structure

**Phase 2 — Visual Design**

- Typography
- Colors
- Components
- Responsive layouts
- MODE:OFF branding

**Phase 3 — Interactivity**

- Activity filters
- Search
- Navigation interactions
- Animations
- Form validation

**Phase 4 — Testing**

- Mobile/desktop testing
- Browser compatibility
- Keyboard navigation
- Form edge cases
- Accessibility
- Performance

**Phase 5 — Future Backend Preparation**

- Keep activity data separate from presentation where practical
- Use reusable components
- Keep JavaScript modules organized
- Avoid tightly coupling UI logic to hard-coded page elements

### Definition of Done for the Initial Frontend

The first version can be considered complete when:

- All four core pages are functional.
- Navigation works across the site.
- Activities can be browsed and filtered.
- The form validates correctly.
- Success and error states are clear.
- The site is responsive.
- Interactive elements work without a backend.
- Keyboard navigation is usable.
- Reduced-motion preferences are respected.
- No critical JavaScript errors occur in the browser console.
- The architecture can later accommodate API/backend integration.

**Core principle:** MODE:OFF should not feel like _another addictive digital product_. Its design and interactions should be calm, intentional, and focused on helping users discover what they can do **away from the screen**.
