import { useState, useEffect } from "react";

// Generic hook for loading data from our "api" functions.
// Takes a function that returns a promise (e.g. () => fetchNotices())
// and gives back { data, loading, error } so components don't have
// to repeat the same try/catch/finally logic every time.
//
// deps works the same way as useEffect's dependency array - pass in
// anything the fetch depends on (like an id from the URL) so it
// re-runs when that changes.
export function useFetch(fetcherFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let didCancel = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const result = await fetcherFn();
        if (!didCancel) {
          setData(result);
        }
      } catch (err) {
        if (!didCancel) {
          setError(err.message || "Something went wrong");
        }
      } finally {
        if (!didCancel) {
          setLoading(false);
        }
      }
    }

    load();

    // cleanup - avoids setting state if the component unmounts
    // before the fetch finishes (React will warn about this otherwise)
    return () => {
      didCancel = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}
