# MODE:OFF — UI/UX Design System & Visual Style Guide

## 0. Design Direction

**MODE:OFF** should feel like a digital doorway into a slower, quieter version of everyday life.

The interface should communicate:

> **“You don't need to achieve anything here. Just choose something you enjoy.”**

The visual language combines **warm minimalism + soft editorial design + subtle digital-product polish**. Avoid the typical “wellness app” aesthetic of gradients, excessive rounded pills, inspirational photography, and overly soft pastel colors. MODE:OFF should instead feel **calm, contemporary, tactile, and slightly playful**.

### Core design principles

1. **Calm over stimulation** — restrained colors, generous whitespace, minimal animation.
2. **Human over corporate** — friendly copy and imperfect, tactile visual details.
3. **Offline over digital** — visual cues should subtly reference paper, physical spaces, analog activities, and natural materials.
4. **Discoverability without pressure** — activities should invite exploration rather than feel like tasks.
5. **Simple first, expressive second** — the basic UI remains clean while selected elements can have personality.

---

# 1. Color System

The palette should be predominantly **warm neutrals**, supported by muted natural colors.

Avoid pure white (`#FFFFFF`) and pure black (`#000000`) as the dominant UI colors. They create too much visual contrast for the intended mood.

## 1.1 Primary Palette

| Token               | Color         | Hex       | Usage                          |
| ------------------- | ------------- | --------- | ------------------------------ |
| `--color-ink`       | Deep charcoal | `#202522` | Main text, icons, navigation   |
| `--color-off-white` | Warm ivory    | `#F7F5EF` | Main page background           |
| `--color-sage`      | Muted sage    | `#A8B8A0` | Primary brand color            |
| `--color-sage-dark` | Forest sage   | `#657662` | Primary buttons, active states |
| `--color-cream`     | Soft cream    | `#EEE8DA` | Cards, secondary sections      |

### Recommended primary relationship

The dominant combination should be:

**Warm Ivory + Deep Charcoal + Sage**

This creates a grounded feeling without looking rustic.

---

## 1.2 Secondary Colors

Use secondary colors sparingly to differentiate activity categories.

| Token              | Color            | Hex       | Suggested meaning               |
| ------------------ | ---------------- | --------- | ------------------------------- |
| `--color-sand`     | Warm sand        | `#D9C8A9` | Creative / craft activities     |
| `--color-clay`     | Muted terracotta | `#C98F78` | Social / energetic activities   |
| `--color-sky`      | Dusty blue       | `#A8BBC0` | Outdoor / reflective activities |
| `--color-lavender` | Muted lavender   | `#B7AEBF` | Quiet / personal activities     |
| `--color-moss`     | Deep moss        | `#7F9274` | Nature / outdoor activities     |

These colors should **never dominate the interface**. They function as visual labels.

For example:

> **PAINTING**
> `sand`

> **BOARD GAMES**
> `clay`

> **WALKING**
> `moss`

---

## 1.3 Accent Color

Use one stronger accent for moments that need attention.

### Warm orange

`#D47D55`

Use it for:

- Important call-to-action emphasis
- Selected interactive elements
- Small decorative details
- Notifications
- “Featured activity” indicators

Do **not** use the accent as the primary button color throughout the site.

The sage color should remain the dominant action color.

---

# 2. Neutral System

Recommended neutral scale:

```text
--neutral-50:  #FAF9F5
--neutral-100: #F7F5EF
--neutral-200: #EEECE5
--neutral-300: #DDDCD4
--neutral-400: #B9BAB1
--neutral-500: #8B8E86
--neutral-600: #656962
--neutral-700: #454943
--neutral-800: #30342F
--neutral-900: #202522
```

### Usage

- `50–100` → backgrounds
- `200–300` → borders/dividers
- `400–500` → secondary text
- `600–700` → supporting content
- `800–900` → headings and primary text

### Important rule

Don't create visual hierarchy purely through color.

Use:

**size + weight + spacing + color**

together.

---

# 3. Typography System

## Recommended pairing

### Headings — **DM Sans**

DM Sans gives MODE:OFF a modern but friendly personality.

Use:

- 600 for major headings
- 500–600 for section headings
- 500 for UI labels

### Body — **Inter**

Inter provides excellent readability for paragraphs, forms, navigation, and small UI text.

Alternative if you want a slightly more editorial personality:

**Manrope + Inter**

Manrope for headings gives the site a more distinctive geometric character.

---

## Typography hierarchy

### Display

**64–80px**

Weight: 600
Line-height: `0.95–1.05`

Example:

> **TURN
> YOUR MODE
> OFF.**

Use this only for the hero.

---

### H1

**48–60px**

Weight: 600
Line-height: `1.0–1.1`

---

### H2

**32–40px**

Weight: 600
Line-height: `1.1–1.2`

---

### H3

**22–28px**

Weight: 600
Line-height: `1.2`

---

### Body Large

**18–20px**

Line-height: `1.5`

Ideal for introductory statements.

---

### Body

**16px**

Line-height: `1.55–1.65`

The primary reading size throughout the website.

---

### Small

**14px**

Line-height: `1.4`

For metadata, activity categories, helper text, etc.

---

### Micro / Label

**11–12px**

Weight: 600
Letter spacing: `0.08–0.12em`

Use uppercase sparingly.

Example:

`ACTIVITY · 30 MIN`

---

# 4. Typography Personality

The typography should feel **quiet but confident**.

Avoid:

- Extremely thin fonts
- Excessive bold text
- Huge amounts of uppercase
- Condensed display fonts
- Decorative scripts
- Excessive text shadows

A useful rule:

> **Large type creates personality; small type creates structure.**

---

# 5. Spacing System

Use an **8px base grid**.

```text
4px   — micro spacing
8px   — icon/text spacing
12px  — compact spacing
16px  — standard spacing
24px  — component spacing
32px  — section spacing
48px  — major spacing
64px  — large spacing
80px  — hero spacing
96px  — major section separation
128px — dramatic whitespace
```

MODE:OFF should intentionally use **more whitespace than a typical commercial website**.

The empty space is part of the brand.

---

# 6. Border Radius

Use moderate rounding rather than extremely rounded UI.

### System

```text
4px   — small controls
8px   — inputs
12px  — buttons
16px  — cards
20px  — featured cards
28px  — large containers
999px — tags/pills only
```

Avoid making every element pill-shaped.

The interface should feel **soft, not bubbly**.

---

# 7. Shadows & Elevation

The site should appear relatively flat.

Use shadows primarily to distinguish floating elements.

### Small shadow

```text
0 2px 8px rgba(32, 37, 34, 0.05)
```

### Medium shadow

```text
0 8px 24px rgba(32, 37, 34, 0.08)
```

### Large floating element

```text
0 16px 40px rgba(32, 37, 34, 0.10)
```

Cards should generally use **border + subtle background contrast** before relying on shadows.

---

# 8. Navigation Bar

## Desktop

The navigation should be minimal.

Imagine a horizontal bar with:

**MODE:OFF** on the left

and:

`Explore` · `Activities` · `About`

on the right.

The navigation should have approximately:

- 24–32px horizontal padding
- 16–20px vertical padding
- Maximum content width around `1200–1280px`

### Logo

`MODE:OFF`

Use:

- DM Sans
- 16–18px
- Weight 600
- Tight letter spacing

The colon should be treated as part of the identity.

Possible visual treatment:

**MODE:**OFF

with the colon or “OFF” subtly highlighted in sage.

---

## Navigation behavior

The navbar should remain visually quiet.

Links:

- Default → charcoal
- Hover → sage
- Active → charcoal + small underline/dot

Avoid dramatic hover animations.

A tiny `2px` underline or subtle color transition is enough.

---

# 9. Hero Section

The hero should immediately establish the concept.

### Composition

Use a **two-column desktop layout**.

Left:

Large headline.

Right:

A visually interesting activity illustration, abstract shape, or activity collage.

Example structure:

```text
┌─────────────────────────────────────────────────┐
│ MODE:OFF                         Explore  About  │
│                                                 │
│                                                 │
│ TURN YOUR MODE        [ relaxed visual /        │
│ OFF.                  activity illustration ]  │
│                                                 │
│ A place to spend     [ small activity label ] │
│ your free time...                               │
│                                                 │
│ [ Explore activities ]                          │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Hero height

Approximately:

`75–90vh`

But avoid forcing it to exactly `100vh`.

Users should be able to see the beginning of the next section.

---

# 10. Hero Visual Language

Instead of generic stock photography, consider:

- Simple editorial illustrations
- Polaroid-like activity snapshots
- Abstract organic shapes
- Hand-drawn icons
- Collages of objects
- Cropped photographs of physical activities

Potential objects:

- Books
- Dice
- Headphones
- Coffee cups
- Sketchbooks
- Plants
- Board games
- Bicycles
- Cards
- Paint brushes

The imagery should feel **observed rather than staged**.

---

# 11. Activity Cards

Activity cards are arguably the most important component.

They should feel like **small invitations**, not product tiles.

## Desktop card

Suggested structure:

```text
┌─────────────────────────────┐
│                             │
│        activity image       │
│                             │
├─────────────────────────────┤
│ CREATIVE                    │
│                             │
│ Sketching                   │
│ Take 20 minutes and draw    │
│ without worrying about...   │
│                             │
│ 20 MIN             →        │
└─────────────────────────────┘
```

### Card properties

- Radius: `16–20px`
- Background: `#EEE8DA` or `#FAF9F5`
- Border: `1px solid #DDDCD4`
- Internal padding: `20–24px`
- Image aspect ratio: approximately `4:3`
- Image radius: `12–14px`

---

## Card hover

On hover:

- Translate upward approximately `-4px`
- Slightly increase shadow
- Image scales to `1.02`
- Arrow moves approximately `4px` right
- Background becomes slightly lighter

Animation:

`200–300ms ease-out`

Avoid exaggerated scaling.

---

# 12. Activity Grid

Use a responsive editorial grid.

### Desktop

```text
12-column grid
```

Typical cards:

```text
4 columns each
```

Result:

```text
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Activity │ │ Activity │ │ Activity │
│          │ │          │ │          │
└──────────┘ └──────────┘ └──────────┘
```

For featured activities, allow:

```text
8 columns + 4 columns
```

or

```text
6 columns + 6 columns
```

This creates visual rhythm rather than a monotonous catalog.

---

# 13. Activity Categories

Categories should use small colored labels.

Example:

`CREATIVE`

`SOCIAL`

`OUTDOOR`

`QUIET`

`MOVEMENT`

Use small uppercase typography.

Don't make category pills too visually dominant.

A subtle colored dot can work even better:

**● CREATIVE**

---

# 14. Buttons

Buttons should feel tactile and friendly.

## Primary button

Background:

`#657662`

Text:

`#F7F5EF`

Radius:

`12px`

Height:

`48–52px`

Horizontal padding:

`20–24px`

Weight:

`500–600`

Example:

**Explore activities →**

### Hover

- Background shifts toward `#536250`
- Translate `-1px`
- Subtle shadow

### Active

Return to normal position.

---

## Secondary button

Transparent background.

```text
background: transparent
border: 1px solid #B9BAB1
color: #30342F
```

Hover:

```text
background: #EEECE5
```

---

# 15. Interactive Form

The form should feel like a **quiet conversation**, rather than an administrative form.

For example, if MODE:OFF asks users what kind of activity they want:

```text
What do you feel like doing?

[ Something creative     ]
[ Something social       ]
[ Something outdoors     ]
[ Something quiet        ]

How much time do you have?

[ 15 min ] [ 30 min ] [ 1 hr ] [ More ]

                 [ Find something ]
```

---

## Form controls

### Input

Height:

`52px`

Radius:

`10px`

Background:

`#FAF9F5`

Border:

`1px solid #C8C8C0`

Focus:

`2px` visual focus ring using sage.

Example:

```text
border-color: #657662
box-shadow: 0 0 0 3px rgba(101,118,98,.15)
```

---

## Selection controls

Selected state:

- Sage background
- Warm-white text
- Border becomes sage

Unselected:

- Warm ivory background
- Charcoal text
- Subtle border

Transition:

`150–200ms`

---

# 16. Form Layout

On desktop, the form could sit inside a large centered container:

```text
             ┌──────────────────────────────┐
             │                              │
             │  WHAT ARE YOU IN THE MOOD    │
             │  FOR?                        │
             │                              │
             │  ○ Creative                  │
             │  ○ Social                    │
             │  ○ Outdoors                  │
             │  ○ Quiet                     │
             │                              │
             │  HOW MUCH TIME?              │
             │                              │
             │  [15] [30] [60] [More]       │
             │                              │
             │       [ Find an activity ]   │
             │                              │
             └──────────────────────────────┘
```

Don't make the container excessively narrow.

Recommended:

`max-width: 720–800px`

---

# 17. Iconography

Icons should be:

- Line-based
- Rounded
- Simple
- Approximately `20–24px`
- Consistent stroke width

Recommended visual language:

**Lucide-style icons**

Examples:

- Arrow-right
- Clock
- Users
- Map-pin
- Heart
- Sun
- Book
- Music
- Coffee

Avoid detailed illustrations as UI icons.

---

# 18. Micro-interactions

The website should move, but **never feel busy**.

### Recommended animation principles

**Fast:** `150ms`

For:

- Button hover
- Icon movement
- Color changes

**Normal:** `250ms`

For:

- Cards
- Navigation
- Form selections

**Slow:** `400–600ms`

For:

- Hero entrance
- Large visual transitions
- Section reveals

### Motion personality

Use:

- Small vertical movement
- Gentle opacity changes
- Slight scaling
- Natural easing

Avoid:

- Bounce
- Elastic animation
- Constant floating
- Excessive parallax
- Large rotations

---

# 19. Responsive Design

## Desktop — 1200px+

Use:

- 12-column grid
- Large typography
- 3-column activity cards
- Spacious hero
- Horizontal navigation

---

## Tablet — 768–1199px

Use:

- 8-column grid
- 2-column activity cards
- Smaller hero typography
- Reduced section spacing
- Navigation remains horizontal if possible

---

## Mobile — <768px

The design should become **more focused, not simply smaller**.

### Navigation

```text
MODE:OFF                 ☰
```

or:

Logo + compact menu.

### Hero

Stack vertically:

```text
TURN YOUR
MODE OFF.

Short supporting text.

[ Explore activities ]

[ visual ]
```

Hero heading:

`44–56px`

---

### Activity grid

Single column or occasionally two very compact columns.

For most cards:

`1 column`

This gives each activity enough breathing room.

---

# 20. Page Structure

A strong homepage could follow this sequence:

### 01 — Navigation

Minimal and fixed-width.

### 02 — Hero

**TURN YOUR MODE OFF.**

Brief explanation + CTA.

### 03 — Quick Discovery

A small interactive selector:

**What are you in the mood for?**

### 04 — Featured Activities

Large editorial cards.

### 05 — Explore Everything

Full activity grid.

### 06 — Offline Philosophy

A visually quiet section explaining the concept.

Possible message:

> **Not everything needs to happen online.**

### 07 — Final CTA

A simple invitation:

**Find something to do.**

### 08 — Footer

Small, understated footer with:

- MODE:OFF
- Navigation
- Short tagline
- Copyright

---

# 21. Grid & Container System

Recommended global container:

```text
max-width: 1280px
margin: 0 auto
padding-inline: 24px
```

At large desktop widths:

```text
padding-inline: 40–64px
```

### Grid gap

Desktop:

`24–32px`

Tablet:

`20–24px`

Mobile:

`16px`

---

# 22. Whitespace Philosophy

Whitespace is one of the defining characteristics of MODE:OFF.

Instead of trying to fill every viewport:

**leave room.**

A section might contain only:

```text
small label

Large heading


short paragraph


button
```

That emptiness communicates the brand's philosophy.

A good target is to have **roughly 40–55% of many major sections consist of whitespace/background**, rather than constantly presenting content.

---

# 23. Visual Texture

To prevent the minimalist interface from feeling sterile, introduce subtle physical references.

Possible techniques:

### Paper texture

A barely perceptible noise texture over the ivory background.

Opacity:

`2–4%`

### Organic shapes

Large, low-contrast blobs behind illustrations.

### Hand-drawn elements

Small arrows, circles, underlines, or annotations.

Use them selectively.

### Photography

If photography is used:

- Natural light
- Slightly imperfect framing
- Muted saturation
- Warm temperature
- No obvious stock-photo poses

---

# 24. Footer

The footer should feel like the end of a relaxing session.

Large whitespace above it.

Example structure:

```text
────────────────────────────────────────

MODE:OFF

A little less screen.
A little more life.

Explore    Activities    About

© 2026 MODE:OFF
```

Keep it simple.

---

# 25. Accessibility

Accessibility should be part of the visual system rather than added later.

### Contrast

Ensure normal body text has strong contrast against backgrounds.

Don't use the muted sage or clay colors for small text unless contrast is sufficient.

### Focus states

Every interactive element needs a visible keyboard focus state.

### Touch targets

Minimum:

`44 × 44px`

### Motion

Respect:

```css
@media (prefers-reduced-motion: reduce);
```

Disable or substantially reduce decorative animation.

### Forms

Every input needs:

- Visible label
- Clear focus state
- Error state
- Helpful validation message

Don't communicate state through color alone.

---

# 26. Design Tokens

A frontend implementation can translate the system into CSS variables like this:

```css
:root {
  /* Colors */
  --color-ink: #202522;
  --color-off-white: #f7f5ef;
  --color-sage: #a8b8a0;
  --color-sage-dark: #657662;
  --color-cream: #eee8da;

  --color-sand: #d9c8a9;
  --color-clay: #c98f78;
  --color-sky: #a8bbc0;
  --color-lavender: #b7aebf;
  --color-moss: #7f9274;
  --color-accent: #d47d55;

  /* Neutrals */
  --neutral-200: #eeece5;
  --neutral-300: #dddcd4;
  --neutral-400: #b9bab1;
  --neutral-500: #8b8e86;
  --neutral-600: #656962;
  --neutral-700: #454943;
  --neutral-800: #30342f;

  /* Typography */
  --font-display: "DM Sans", sans-serif;
  --font-body: "Inter", sans-serif;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 28px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(32, 37, 34, 0.05);

  --shadow-md: 0 8px 24px rgba(32, 37, 34, 0.08);

  --shadow-lg: 0 16px 40px rgba(32, 37, 34, 0.1);

  /* Motion */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 500ms ease;
}
```

---

# 27. Overall Visual Reference

If you were translating this design system into a visual mockup, imagine:

![Image](https://images.openai.com/static-rsc-4/WNuyWLAISLI8_Qj_ZvJEwumBz0X8o-LZZPtEeFk1wmsoaWDcHc01I0m24f9FsUwWkL5RlKSL45wmukmQTJOKdinLhPKGuaFRssTLdEBttssG1xcJUnRkDXjw1bQRXrTvrkhpe2rvdOOfn0amPS-wEEJq5zBlMZNpymZ7K5Zr8g9scYLslV52LAPQ93uyuYIZ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/_t9R4M-iA8S8AEc6_-ggzzp96-QivwUKfvTH19h8d2_0PaeH70pAH_NWi63zCAKJ3R20xdhBUcqbX_cBSRQmagBuCWFv25ztYZLlqEtJU-otLuBDpTbe_lHMQUpIIXbpSoDnIjIdugTmir8rKBLWUAthTvg__UiesU4frozSQZbtQ0aaJnTWjwQubnlAPePB?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/mr36pLfa07LVyDv8-Hxp-4ilhybq5J-FRb6H9cd7EDfnHBbhpIqpWN2-ELqaD7_exXamwqaGeasoGenpkMUNo3W9nV3M5ijnZ7jaHBoKD2wkfD0xSd9uULGO-uPsr__ZaK-OONnA3rOFhzeagVzOFM9COHZJD2MKvdpij5D3m3y1818Un9BXYfzmKbMRNbXA?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/8G8S2P7QpVSCNtwzhauE5Bc0Ree_LX6PtCMrXjJooAW5sSnUQo4-n2CkYEsek5fOjX4pDeD7PkYkGaxoFadePM0EStj8dkNrytCTijJ9qCc0Q4znff_1AYEXLCQm4xdY13LW2LSasMFod9rdrBQrnZXmscr1RiD835w2LUXcVTSfkCHvxS38wHv2wr4-_vhs?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/jg_wRzopQ9cn7kSg83OPg8LCRHaol3CWh7pgUUU2l27n3NLyk_yv463G9J3IidFvMdxsz9LCMBVMAirWS-ZEqK_t7o4TYM3KSAV1QTtNe3sd7hxTPFRWP4t1R0js2rjUYsKrfDvU17A511MEn4wOAxEhBTFBnrTfqaOIG8i5wcyuOrspjuNsTqh1QHeZzQZA?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/mGvOQyqCCrUxi9KwMeh65Do_25lxOjZNIi62LJFUijhtVh8eNbX1gt8jnzCNZ90MLYTO7oaOY_SVx7rEg65HCAeyJF8fdVTe9gh2z77gO75kNDoYhkIw7liLXHyU5NTpV4UUQ7ETuXfPuY7qPSMHXdF-JhSfqHcw5PU5652yN1LyYCqzE28qIRmzPKfTsSdQ?purpose=fullsize)

The resulting interface should sit somewhere between:

**a contemporary editorial magazine + a calm community space + a beautifully designed analog notebook.**

Not:

**a productivity dashboard + a wellness app + a conventional SaaS landing page.**

---

# 28. Final Art Direction

The most important visual rule for **MODE:OFF** is:

> **Make the interface feel like a place people want to stay, not a website they need to use.**

That means:

- Warm ivory instead of stark white
- Charcoal instead of black
- Sage instead of bright green
- Moderate rounded corners instead of excessive pills
- Subtle borders instead of heavy shadows
- Large typography instead of dense information
- Editorial layouts instead of repetitive grids
- Natural imagery instead of polished stock photography
- Gentle interaction instead of flashy animation
- Generous whitespace instead of maximizing content density

The finished product should feel **quiet at first glance, interesting on closer inspection, and effortless to navigate**.

**MODE:OFF's visual identity can ultimately be summarized as:**

### **Slow interface. Warm space. Real-world activities. Less screen, more life.**
