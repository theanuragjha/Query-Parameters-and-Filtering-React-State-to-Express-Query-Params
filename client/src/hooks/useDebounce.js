// Already provided for you (this was Module 1's work). You do NOT need to edit this.
// Returns a copy of `value` that only updates after `delay` ms of no changes.
import { useEffect, useState } from "react";

export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}
