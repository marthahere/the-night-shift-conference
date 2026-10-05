# The Night Shift

**The Night Shift • Ideas worth staying up for.**
A late-night conference for curious minds.

This is a single-page schedule for a fictional two-day online conference about design, frontend development, and inclusive technology. I built it with React and Vite as a project to practice components, props, state, and responsive, accessible layouts.

## What this is

A schedule page for a made-up conference with three tracks running at the same time:

- Interface
- Under the Hood
- For Everyone

You can switch between Day 1 and Day 2, view each time slot, and click on a session to open its details. The sessions and speakers are all fictional.

## Getting it running

You need Node.js 18 or newer.

```bash
npm install
npm run dev
```

Then open the address Vite prints in the terminal, usually http://localhost:5173.

For a production build, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

There is no backend, no login, no API, and no environment setup beyond installing dependencies.

## Deploying to GitHub Pages

The GitHub Actions workflow builds and deploys the site when changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The site will be available at `https://marthahere.github.io/the-night-shift/` after the workflow succeeds.

## Using it

1. The page opens on Day 1.
2. Use the Day 1 and Day 2 buttons to switch between days.
3. Each row is one time slot. The start time appears on the left with the duration underneath, and the session cards appear on the right.
4. Click a session card to open its details.
5. Close the details with the Close button or the Escape key.

## Keyboard access

The day choices and session cards are real buttons, so Tab reaches them and Enter or Space activates them. No `tabindex` is needed. The day buttons are grouped and labeled for assistive technology.

The tab order is:

1. Day 1 button
2. Day 2 button
3. Session cards, row by row from earliest to latest, left to right within each row

That matches the visual order, and the HTML is written in that same sequence.

When a session is opened, focus moves into the details dialog. The Close button is the only control in there. Press Escape or activate Close to dismiss it, and focus returns to the card you opened.

Every focusable element has a cyan focus ring using :focus-visible, so keyboard users can see where they are without the outline appearing on mouse clicks.

## Responsive layout

On screens below 800px, each time slot becomes a stack: the time is on top, and the three cards sit underneath it in a single column. The rows stay in time order, so the whole day reads as one list from earliest to latest.

At 800px and wider, each row has the time on the left and the three tracks side by side.

Long titles wrap instead of pushing the layout wider, and I added min-width: 0 to the card grid so it can shrink without causing sideways scrolling.

## Hidden content and accessibility decisions

The only thing hidden with `display: none` is the track titles above the columns on narrow screens. They are not needed there because the columns collapse into rows and every card already shows its track name. The titles are marked `aria-hidden` so screen readers do not announce track names twice.

The details dialog is not hidden when it is closed; it is simply not rendered until a session is selected.

I used a native dialog element instead of building a custom popup, because showModal() gives me built-in Escape handling, focus trapping, and return focus after closing. The only catch is a quick check for dialog.open in the effect, because React StrictMode runs effects twice in development.

## What it does not do

- No backend
- No login or user accounts
- No saved state after refresh
- No filtering or search
- No time zone labels
- No actual live stream or sign-up flow
- No automated tests
- No screen reader testing in a real assistive technology setup

## Project structure

```text
src/
├── main.jsx            Starts React
├── App.jsx             Holds the state (selected day, selected session)
├── data.js             Tracks, time slots, and all 24 sessions
├── styles.css          All of the styling
└── components/
    ├── Header.jsx
    ├── DaySelector.jsx
    ├── Schedule.jsx      One row per time slot
    ├── SessionCard.jsx
    └── SessionDialog.jsx
```

## Notes

- The schedule is data-driven: all of the sessions live in src/data.js.
- The dialog opens whenever a session is selected, rather than keeping a separate isOpen state.
- Time data is stored once in the slots list and reused in both the schedule and the dialog.
- I kept the styling in one CSS file with a few color variables at the top instead of bringing in a CSS framework.

This project was built to practice responsive design and keyboard accessibility in a browser-only React app.
