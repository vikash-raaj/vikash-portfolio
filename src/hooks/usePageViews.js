import { useState, useEffect } from 'react';

const DB_URL = 'https://vikash-portfolio-f1cd0-default-rtdb.firebaseio.com/pageviews.json';

export default function usePageViews() {
  const [count, setCount] = useState(null);

  useEffect(() => {
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
