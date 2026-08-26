// ─────────────────────────────────────────────────────────────
// Threadbase API — already implemented. You do NOT need to edit this.
// GET /api/threads → filters by ?search= (title contains, case-insensitive)
//                    and sorts by ?sort= ("newest" | "oldest" | "top").
// A small delay is added so the loading / previous-data states are visible.
// ─────────────────────────────────────────────────────────────
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// createdAt: higher = newer · votes: for the "top" sort
const threads = [
  { id: 1, title: "Welcome to Threadbase", body: "Your React state now drives this list.", createdAt: 10, votes: 4 },
  { id: 2, title: "React Query keys are the bridge", body: "Put filters in the key and it refetches for you.", createdAt: 9, votes: 31 },
  { id: 3, title: "Debounce your search input", body: "One request per pause, not per keystroke.", createdAt: 8, votes: 18 },
  { id: 4, title: "Axios params build the URL", body: "params: { search, sort } → ?search=…&sort=…", createdAt: 7, votes: 12 },
  { id: 5, title: "Express reads req.query", body: "Everything in req.query arrives as a string.", createdAt: 6, votes: 7 },
  { id: 6, title: "Vite env vars need the VITE_ prefix", body: "import.meta.env.VITE_API_URL.", createdAt: 5, votes: 9 },
  { id: 7, title: "keepPreviousData keeps the list calm", body: "No skeleton flash while the filter refetches.", createdAt: 4, votes: 22 },
  { id: 8, title: "Server state is not UI state", body: "That is why TanStack Query exists.", createdAt: 3, votes: 15 },
];

app.get("/api/threads", (req, res) => {
  const { search = "", sort = "newest" } = req.query;

  let result = threads.filter((t) =>
    t.title.toLowerCase().includes(String(search).toLowerCase())
  );

  if (sort === "oldest") {
    result = [...result].sort((a, b) => a.createdAt - b.createdAt);
  } else if (sort === "top") {
    result = [...result].sort((a, b) => b.votes - a.votes);
  } else {
    // "newest" (default)
    result = [...result].sort((a, b) => b.createdAt - a.createdAt);
  }

  // 500ms delay so isPending / keepPreviousData are observable
  setTimeout(() => res.json(result), 500);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Threadbase API running on http://localhost:${PORT}`);
});
