import { useState, useEffect } from 'react';

export default function usePageViews() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/vikashraj-portfolio/pageviews/up')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  return count;
}
