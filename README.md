# The Whisky Circle

A modern Vue 3 + Vite + TypeScript front-end for a whisky community website.

## Tech stack

| Concern         | Choice                                 |
| --------------- | -------------------------------------- |
| Framework       | Vue 3 (Composition API, `<script setup>`) |
| Build tool      | Vite 6                                 |
| Language        | TypeScript (strict)                    |
| Routing         | Vue Router 4 (lazy-loaded, typed meta) |
| State           | Pinia + `pinia-plugin-persistedstate`  |
| HTTP            | Axios (interceptors, normalized errors) |
| Styling         | Tailwind CSS + SCSS (design tokens, BEM in `.vue` scoped styles) |
| Forms           | VeeValidate + Yup                      |
| Utilities       | VueUse, dayjs, lodash-es               |
| Tests           | Vitest + Vue Test Utils + jsdom        |
| Lint / format   | ESLint (flat config) + Prettier        |

## Getting started

```bash
# 1. install dependencies
npm install

# 2. create your local env (then edit the values)
cp .env.example .env

# 3. start dev server
npm run dev
```

Useful scripts:

```bash
npm run dev          # vite dev server with HMR
npm run build        # type-check + production build
npm run preview      # serve the production build locally
npm run lint         # eslint --fix on src
npm run format       # prettier --write src
npm run type-check   # vue-tsc strict check
npm run test:unit    # vitest
```

## Folder structure

```
.
├── public/                       # static assets served as-is
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── abstracts/        # design tokens + mixins (auto-injected via vite.config)
│   │       ├── base/             # reset + typography
│   │       └── main.scss         # entry that pulls Tailwind + base
│   ├── components/
│   │   ├── common/               # BaseButton, BaseInput, BaseCard, ToastContainer
│   │   └── layout/               # TheHeader, TheFooter
│   ├── composables/              # useAsync, useToast, useBreakpoint
│   ├── constants/                # app-wide constants (nav links, social, etc.)
│   ├── layouts/                  # DefaultLayout, AuthLayout
│   ├── router/                   # index, routes, guards, RouteMeta types
│   ├── services/
│   │   ├── api/                  # axios instance + endpoint map
│   │   └── *.service.ts          # domain services (auth, whisky)
│   ├── stores/                   # pinia stores (auth, ui, whisky)
│   ├── types/                    # shared TS types (api, user, whisky)
│   ├── utils/                    # formatters, validators, storage
│   ├── views/                    # route-level pages (lazy loaded)
│   ├── App.vue
│   └── main.ts
├── .env.example
├── eslint.config.js
├── tailwind.config.js
├── tsconfig*.json
├── vite.config.ts
└── package.json
```

## Architectural conventions

- **Path aliases.** Always import from `@/` (or sub-aliases `@components`, `@stores`, etc.) — defined in both `vite.config.ts` and `tsconfig.app.json`.
- **Views vs. components.** Anything route-level lives in `src/views`. Reusable building blocks live in `src/components`. Prefix shared building blocks with `Base*`, and singletons with `The*`.
- **Pinia setup stores.** Stores use the composition-style `defineStore('name', () => { ... })` for full TS inference. The auth store persists via `pinia-plugin-persistedstate`.
- **API layer.** Components never call axios directly. They call a `*.service.ts` function, which talks to the shared `http` instance. Errors are normalized in `services/api/http.ts` so the rest of the app can rely on a single `ApiError` shape.
- **Styling.** Tailwind handles utility-style layout; SCSS modules (scoped per `.vue` file) handle component design with BEM. The `abstracts` folder (variables + mixins) is auto-injected into every SCSS block by Vite — you can use `$color-cask` or `@include breakpoint-up(md)` without importing.
- **Route meta.** Type-safe via `src/router/types.d.ts`. Use `meta.requiresAuth` / `meta.requiresGuest` and let `setupGuards` enforce it.
- **Constants live in `src/constants`,** not magic strings. Same for endpoint paths (`services/api/endpoints.ts`).

## Design system

Tokens live in two parallel sources — Tailwind (`tailwind.config.js`) and SCSS (`src/assets/styles/abstracts/_variables.scss`) — so you can mix utility classes and scoped SCSS without drift. When the Figma file is wired in, the brand palette (`whisky.*`, `cask`, `gold`, `smoke`) will be refined to match exactly.

## Next steps

1. `npm install` and confirm the dev server boots at <http://localhost:5173>.
2. Paste the Figma file URL — design tokens and key components will be pulled into the SCSS variables and Tailwind theme.
3. Implement the API once endpoints are agreed (see `services/api/endpoints.ts`).
