import ThreadList from "./components/ThreadList.jsx";

// App is already wired. It renders <ThreadList />.
// Your work happens in ThreadList.jsx (state → queryKey → params)
// and threads.service.js (accept + forward the filters).
export default function App() {
  return (
    <div className="wrap">
      <h1>Threadbase</h1>
      <p className="muted">Search &amp; sort — wire the UI to the query.</p>
      <ThreadList />
    </div>
  );
}
