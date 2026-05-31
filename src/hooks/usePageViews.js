import { useState, useEffect } from 'react';

// Firebase Realtime Database REST API — CORS enabled, no SDK needed
const DB_URL = `${import.meta.env.VITE_FIREBASE_DB_URL}/pageviews.json`;

export default function usePageViews() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    if (!import.meta.env.VITE_FIREBASE_DB_URL) return;

    async function increment() {
      const res = await fetch(DB_URL);
      const current = (await res.json()) || 0;
      const next = current + 1;
      await fetch(DB_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(next),
      });
      setCount(next);
    }

    increment().catch(() => setCount(null));
  }, []);

  return count;
}
