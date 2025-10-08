# MunQueue Design Guidelines

## Design Approach

**Selected Approach**: Design System - Material Design Principles
**Justification**: MunQueue is a utility-focused productivity tool for formal MUN settings requiring efficiency, clarity, and professional appearance. Material Design's emphasis on clear hierarchy, responsive interactions, and mobile-first patterns aligns perfectly with real-time queue management needs.

**Key Design Principles**:
1. **Functional Clarity**: Every element serves a clear purpose in queue management
2. **Instantaneous Feedback**: Visual confirmation of all real-time updates
3. **Touch-First Interaction**: Optimized for mobile delegate and host usage
4. **Professional Formality**: Respects the diplomatic context of MUN events

---

## Core Design Elements

### A. Color Palette

**Dark Mode** (Primary - matches formal MUN settings):
- Background: 222 15% 12%
- Surface: 222 15% 16%
- Surface Elevated: 222 15% 20%
- Primary: 217 91% 60% (professional blue for actions)
- Primary Hover: 217 91% 55%
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 70%
- Success: 142 76% 45% (queue entry confirmation)
- Error: 0 84% 60% (remove actions)
- Border: 222 15% 28%

**Light Mode** (Optional secondary):
- Background: 0 0% 100%
- Surface: 0 0% 98%
- Primary: 217 91% 50%
- Text: 222 15% 12%

**Accent Colors**:
- Active Speaker: 142 76% 50% (green highlight - highly visible)
- Queue Position: 217 91% 60% (blue badges)
- Warning: 38 92% 50% (reset/clear actions)

### B. Typography

**Font Stack**: System fonts for optimal performance and readability
- Primary: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

**Type Scale**:
- Display (Room Code): text-4xl font-bold tracking-tight (36px)
- Heading 1 (Page Titles): text-2xl font-semibold (24px)
- Heading 2 (Section Headers): text-xl font-medium (20px)
- Body Large (Queue Names): text-lg font-medium (18px)
- Body (Countries/Portfolio): text-base (16px)
- Caption (Position Numbers): text-sm font-semibold (14px)
- Labels: text-sm font-medium uppercase tracking-wide (14px)

**Line Heights**: Generous for mobile readability (1.6 for body, 1.2 for headings)

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16 for consistent rhythm
- Micro spacing: p-2, gap-2 (8px)
- Standard spacing: p-4, gap-4 (16px)
- Component spacing: p-6, gap-6 (24px)
- Section spacing: p-8, gap-8 (32px)
- Major sections: p-12, p-16 (48px, 64px)

**Grid System**:
- Mobile (base): Single column, max-w-md mx-auto
- Tablet (md:): max-w-2xl, optional two-column for host controls
- Desktop (lg:): max-w-4xl, queue list with action columns

**Container Strategy**:
- Landing: Centered cards with max-w-sm
- Delegate View: Full-width queue list, centered inputs max-w-md
- Host View: Wide layout max-w-4xl for queue management dashboard

### D. Component Library

**Navigation**:
- Sticky header with room code display (h-16, backdrop-blur-md, border-b)
- Copy room code button (icon button with tooltip feedback)
- Back navigation (< icon for mobile)

**Forms**:
- Input fields: Large h-12, rounded-lg, border-2, focus ring-2 ring-primary
- Dropdowns: Custom styled select with chevron icon, same sizing
- Labels: text-sm font-medium mb-2
- Form layout: Vertical stack with gap-4, full mobile width

**Buttons**:
- Primary Action (Enter Queue, Call Next): h-12 px-6 rounded-lg bg-primary text-white font-medium, full width on mobile
- Secondary Action (Remove, Reorder): h-10 px-4 rounded-md variant-outline, icon + text
- Danger Action (Reset, Leave): h-10 px-4 rounded-md bg-error text-white
- Icon Buttons: h-10 w-10 rounded-full, centered icon
- All buttons: Active state with scale-95 transform

**Queue List**:
- List items: p-4 rounded-lg bg-surface border border-border
- Position badge: Circular w-8 h-8 bg-primary/20 text-primary font-bold
- Delegate info: Flex layout with country flag emoji, name (text-lg), country/portfolio (text-sm text-secondary)
- Host controls: Right-aligned button group (remove, reorder icons)
- Active speaker: ring-2 ring-success bg-success/5, pulse animation
- Spacing: gap-3 between items

**Status Indicators**:
- Room code card: p-6 rounded-xl bg-surface-elevated, prominently displayed
- Active speaker banner: Sticky top-16, p-4 bg-success/10 border-l-4 border-success
- Queue count: Pill badge with count (bg-primary/20 text-primary px-3 py-1 rounded-full)
- Empty state: Centered text-secondary with icon, p-12

**Cards**:
- Role selection (Landing): p-8 rounded-2xl bg-surface hover:bg-surface-elevated transition, border border-border
- Info cards: p-4 rounded-lg bg-surface/50

**Overlays**:
- Toast notifications: Fixed bottom-4 right-4, p-4 rounded-lg shadow-xl backdrop-blur-md
- Modal (if needed): Full-screen on mobile, max-w-lg centered on desktop, backdrop-blur

### E. Interactions & States

**Real-time Updates**:
- New queue entry: Slide-in from top with fade
- Queue reorder: Smooth transform with duration-200
- Speaker called: Flash green highlight then fade out
- Removal: Slide-out with fade-out

**Button States**:
- Disabled: opacity-50 cursor-not-allowed (when already in queue)
- Loading: Spinner icon + text
- Success: Brief green flash then return to normal

**Mobile Gestures**:
- Swipe to remove (optional enhancement)
- Long-press for additional options (optional)
- Large 44px minimum touch targets

**Feedback**:
- Instant visual confirmation for all actions
- Socket connection status indicator (small dot in header: green=connected, red=disconnected)
- Copy to clipboard: Brief "Copied!" tooltip

---

## Page-Specific Layouts

### Landing Page (/)
- Centered card layout with max-w-sm
- App title/logo at top (text-4xl font-bold mb-8)
- Two large role selection cards (Host / Delegate) with icons
- Brief description under each role
- Clean white/dark background with subtle gradient

### Delegate View (/room/:roomCode)
- Sticky header: Room code + copy button
- Form section: Name, Country dropdown, Portfolio dropdown (optional), Enter Queue button
- Live queue section: Header with count, scrollable list
- Self in queue: Highlighted with "You" badge
- Leave queue button if already in queue

### Host View (/host/:roomCode)
- Header: Room code (large, copyable) + connection status
- Active speaker section: Full-width banner when speaker is called
- Queue management dashboard:
  - Queue count and Reset button in header
  - Call Next Speaker: Prominent primary button (disabled if queue empty)
  - Queue list with position numbers, delegate info, and control buttons (remove, reorder up/down)
- Empty state: Clear messaging with illustration/icon

---

## Accessibility & Responsive Behavior

- All interactive elements: min-h-11 (44px) for touch
- Color contrast: WCAG AA compliant (4.5:1 for text)
- Focus indicators: 2px ring on all interactive elements
- Screen reader labels for icon-only buttons
- Keyboard navigation: Tab order follows visual flow
- Mobile breakpoints: base (mobile), md: (tablet 768px), lg: (desktop 1024px)
- Landscape mobile: Reduce vertical padding, horizontal layout for forms

---

## Additional Notes

- No images or hero sections needed - utility app focuses on functionality
- Animations minimal and purposeful (queue updates, state changes only)
- Socket.IO connection status always visible for reliability assurance
- Professional, diplomatic aesthetic matching MUN formality
- Print-friendly queue view for hosts (optional enhancement)