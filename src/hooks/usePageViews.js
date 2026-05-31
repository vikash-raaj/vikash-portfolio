import { useState, useEffect } from 'react';

export default function usePageViews() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/vikashraj-portfolio/pageviews')
      .then(res => res.json())
      .then(data => setCount(data.value))
      .catch(() => setCount(null));
  }, []);

  return count;
}
