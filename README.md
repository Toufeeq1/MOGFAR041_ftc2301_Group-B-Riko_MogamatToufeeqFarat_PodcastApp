# Audio Flow Podcast App

## 1. Project Overview
This project is a podcast web app built with React and Vite, and deployed on Netlify.

At a high level, the app:
- shows a login screen first
- loads podcast data from `https://podcast-api.netlify.app/`
- displays podcast cards with search and sorting
- opens dialogs for show, season, and episode details
- lets users play episode audio in the browser

## 2. Features
- Login gate using a simple username/password check in the frontend.
- Session persistence using `sessionStorage` token.
- Podcast card list with:
- title
- genres
- season count
- updated date
- Search by show title.
- Sort controls:
- `A-Z`
- `Z-A`
- date `Ascending`
- date `Descending`
- `Genre`
- Featured image carousel at the top of the home screen.
- "Load more" pagination for cards.
- Show details dialog per card.
- Season picker dialog with episode list.
- Episode audio playback (`<audio controls>`).
- Per-episode star toggle (UI-only, not persisted).

## 3. Tech Stack
- React 18
- Vite 8
- React Router DOM 6
- Material UI (MUI) + Emotion
- JavaScript (ES modules)
- Netlify hosting

Dependencies are defined in `package.json`.

## 4. Project Structure (Folder/File Explanation)
```text
.
├─ public/
│  ├─ sound.png
│  └─ a_more_colorful_aurora_borealis__northern_lights__by_aiartbysurya_dfkr6bh.png
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  └─ Components/
│     ├─ home.jsx
│     ├─ NavBar.jsx
│     ├─ card.jsx
│     ├─ tributton.jsx
│     ├─ dialog.jsx
│     ├─ Season.jsx
│     ├─ Imagecarousel.jsx
│     ├─ likebutton.jsx
│     ├─ Login.jsx
│     ├─ SignUpPage.jsx
│     └─ client.jsx
├─ package.json
├─ vite.config.js
└─ CNAME
```

File purpose:
- `src/main.jsx`: React entry point, renders `<App />`.
- `src/App.jsx`: Router + session token gate for `/` and `/Home`.
- `src/Components/home.jsx`: Home page shell (`NavBar` + `CardSetUp`).
- `src/Components/card.jsx`: Main podcast list screen logic (fetch, sort, search, UI).
- `src/Components/dialog.jsx`: Show-level modal; fetches full show data by id.
- `src/Components/Season.jsx`: Season selector + full-screen episode details dialog.
- `src/Components/Imagecarousel.jsx`: Top featured slideshow.
- `src/Components/likebutton.jsx`: Local star toggle button.
- `src/Components/Login.jsx`: Login form and hardcoded credential validation.
- `src/Components/tributton.jsx`: Sort button groups.
- `src/Components/SignUpPage.jsx`: Supabase sign-up page component, currently not routed.
- `src/Components/client.jsx`: Supabase client setup (env-based), currently not used by active routes.
- `vite.config.js`: Vite config with React plugin.
- `CNAME`: Custom domain indicator (`audioflow.netlify.app`).

## 5. Application Flow (Entry Point, Routing, State/Data Flow)
### Entry point
1. `src/main.jsx` mounts the app into `#root`.
2. `<App />` is wrapped in `React.StrictMode`.

### Routing flow
1. `src/App.jsx` uses `BrowserRouter`.
2. Route `/` renders `LoginPage`.
3. Route `/Home` is only defined when `token` exists.
4. On successful login, app navigates to `/Home`.
5. Token is stored in `sessionStorage` and restored on page load.

### Data/state flow
1. `CardSetUp` (`card.jsx`) fetches show previews from `https://podcast-api.netlify.app/`.
2. Response is stored in `cards` state.
3. Derived state is computed with `useMemo`:
- formatted update date
- sort results
- search-filtered results
- visible card slice for pagination
- carousel slide data
4. Each rendered card passes show data to `Dialogs`.
5. `Dialogs` fetches full show details from `https://podcast-api.netlify.app/id/{cardid}`.
6. `Season` reads season data and renders episode list + audio player.

## 6. Component Reference (Main Components + Props)
### `src/main.jsx`
- Purpose: App bootstrap.
- Props: none.

### `src/App.jsx`
- Purpose: Routing and auth gate via session token.
- Props: none.

### `src/Components/home.jsx`
- Purpose: Home layout wrapper for navbar + card screen.
- Props: none.

### `src/Components/card.jsx` (`CardSetUp`)
- Purpose: Fetch/show podcasts, search/sort, carousel, load more, trigger show dialogs.
- Props: none.
- Important internal state:
- `cards`, `isLoading`, `sortingOption`, `searchQuery`, `visibleCardsCount`

### `src/Components/dialog.jsx` (`Dialogs`)
- Purpose: Show details modal and season selector entry point.
- Props:
- `cardid: number` (required)
- `cardimage: string` (required)
- `cardtitle: string` (required)
- `carddescription: string` (required)
- `cardgenres: number[]` (required)
- `cardupdated: string` (required)
- `genreMap: object` (required by PropTypes; currently not used in component logic)

### `src/Components/Season.jsx` (`BasicSelect`)
- Purpose: Select a season and open full-screen dialog with episode list + audio players.
- Props:
- `idSeasons: object` (expected to contain `seasons[]`; no PropTypes currently)

### `src/Components/Imagecarousel.jsx` (`ImageCarousel`)
- Purpose: Cycles featured show images with next/back controls.
- Props:
- `slides: Array<{ image: string, label: string, id?: string|number }>`

### `src/Components/likebutton.jsx` (`LikeButton`)
- Purpose: Toggle star icon in episode UI.
- Props: none.
- Note: This state is local per render and not persisted.

### `src/Components/Login.jsx` (`LoginPage`)
- Purpose: Login form and route transition to `/Home`.
- Props:
- `setToken: function` (required)
- Current credential check:
- username: `toufeeq`
- password: `latais`

## 7. Setup & Run Locally
### Prerequisites
- Node.js and npm installed.
- A Node version compatible with Vite 8 (`Needs verification` for exact version in your local environment).

### Steps
1. Install dependencies:
```bash
npm install
```
2. Start development server:
```bash
npm run dev
```
3. Open the local URL shown by Vite (usually `http://localhost:5173`).
4. Login using:
- username: `toufeeq`
- password: `latais`

### Useful scripts
- `npm run dev` - start dev server
- `npm run build` - create production build in `dist/`
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## 8. Build & Deploy (Netlify)
### Local production build
```bash
npm run build
npm run preview
```

### Netlify settings
- Build command: `npm run build`
- Publish directory: `dist`

### Routing note for Netlify
Because this is a React SPA using client-side routing, direct refresh on nested routes (for example `/Home`) may need a redirect rule.

If needed, add a `_redirects` file in `public/`:
```text
/* /index.html 200
```

`Needs verification`: your current Netlify site UI settings and whether a redirect rule is already configured there.

## 9. Troubleshooting
### Slow image loading (diagnosis + quick fixes)
Diagnosis checklist:
1. Open browser DevTools `Network` tab and reload.
2. Check image file sizes and response times from `podcast-api.netlify.app`.
3. Check number of API calls on first load.

Important current behavior:
- `card.jsx` loads 12 cards initially and shows many remote images.
- `dialog.jsx` fetches per-show details for each rendered card on mount, not only when the user clicks `Description`.
- Loading more cards adds more detail fetches.

Quick fixes:
1. Fetch show details only when `Description` is clicked (move fetch from mount effect into open handler).
2. Reduce `INITIAL_VISIBLE_CARDS` and/or `FEATURED_CAROUSEL_SLIDES`.
3. Keep `loading="lazy"` on card images (already present).
4. Add lightweight skeleton placeholders while images load.
5. Cache fetched show details in state keyed by `cardid` to avoid repeat network calls.

### Login fails
- Ensure exact credentials are used:
- username `toufeeq`
- password `latais`

### Blank or broken `/Home` on refresh in production
- Add SPA redirect rule (`/* /index.html 200`) if missing.

### Runtime error around seasons (`Cannot read properties of undefined`)
- Likely from `idSeasons.seasons` being accessed before show details finish loading.
- Quick fix: guard render in `Season.jsx` with checks like `if (!idSeasons?.seasons) return null;`.

## 10. Future Improvements
1. Replace hardcoded login with secure authentication flow.
2. Route and integrate `SignUpPage` or remove unused auth files if out of scope.
3. Persist favorites (localStorage or backend) instead of UI-only state.
4. Add error UI and retry buttons for failed fetches.
5. Add tests (unit/component/integration) for card sorting, filtering, and dialogs.
6. Add loading skeletons and request caching for better perceived performance.
7. Introduce global state management only if feature complexity grows.
8. Add accessibility improvements (focus management in dialogs, labels, keyboard paths).
