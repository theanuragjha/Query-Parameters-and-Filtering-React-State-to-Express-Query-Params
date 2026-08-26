# Threadbase — Query Params & Filtering Starter

A React (Vite) + Express scaffold. The Express API reads `?search=` and `?sort=`,
the Axios client, the `QueryClientProvider`, the `useDebounce` hook, and the
`SearchBar` / `SortDropdown` components are all **done**. Your job is to wire the
search + sort UI to the query so the list filters and sorts against the server.

## Run it

```bash
npm run setup     # installs root + server + client deps
cp client/.env.development.example client/.env.development
npm run dev       # Express on :3001, Vite on :5173
```

Open http://localhost:5173 — you'll see the full thread list. Typing in the search
box and changing the sort do **nothing yet** (the query is static).

## Your task

1. **`client/src/services/threads.service.js`** — make `getThreads(filters)` accept
   the filters and pass them to Axios as `{ params: filters }`.
2. **`client/src/components/ThreadList.jsx`** — add `search` + `sort` state, debounce
   the search with `useDebounce(search, 300)`, make the `queryKey` dynamic
   (`["threads", { search: debouncedSearch, sort }]`), pass the filters through the
   `queryFn` (`({ queryKey }) => getThreads(queryKey[1])`), and wire `SearchBar` /
   `SortDropdown` to your state. (Recommended: `placeholderData: keepPreviousData`.)

## What you should NOT touch

- `server/` — the API already filters by `?search=` and sorts by `?sort=`.
- `client/src/services/apiClient.js`, `client/src/main.jsx`,
  `client/src/hooks/useDebounce.js`, `SearchBar.jsx`, `SortDropdown.jsx` — all done.

## Verify

- DevTools → **Network**: typing `react` fires **one** request per pause, with URL
  `GET /api/threads?search=react&sort=newest`.
- Changing the sort dropdown refetches **immediately** with the new `sort` in the URL.
- Returning to a filter combination you already used is a **cache hit** (no request).
