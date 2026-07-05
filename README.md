# Campus Events & Notices Dashboard

A dashboard of Campus Events & Notices for Students. Built with React + Vite.

## What it does

Students can browse campus notices and events on one page. Notices can be searched by
title and filtered by category (both work together). Clicking a notice or event opens
a detail page with the full content. There's also a dark mode toggle that remembers
your preference between visits.

## Links

- Live demo https://campus-events-notices-dashboard.vercel.app/
- Github Repo https://github.com/MDSKSELIM/Campus-Events-Notices-Dashboard

## Getting started

git clone https://github.com/MDSKSELIM/Campus-Events-Notices-Dashboard.git  
cd notes-app  
npm install  
npm run dev  

## What are the Features

- **Notice feed** — title, category badge, posted date
- **Event feed** — title, venue, date
- **Detail pages** for both, at `/notices/:id` and `/events/:id`, using React Router
- **Search bar** that filters notices by title as you type
- **Category filter chips** that work alongside search, not instead of it
- **Loading and error states** for every fetch
- **Responsive layout** — 1 column on mobile, 2 on tablet, 3 on desktop
- **Dark mode** toggle, saved in localStorage

## How the data works

There's no real backend for this, so `src/data/api.js` wraps the local JSON files
(`notices.json`, `events.json`) in functions that return promises and have a small
artificial delay, so the loading states actually show up instead of being instant.
Everything downstream (the hook, the components) is written the same way it would be
against a real API — if this got hooked up to a real backend later, `api.js` is the
only file that would need to change.

## Stack

- React 19 + Vite
- React Router for routing
- Plain CSS (no framework) — variables for light/dark theme
