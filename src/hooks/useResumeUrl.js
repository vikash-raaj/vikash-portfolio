import { useState, useEffect } from 'react';

const DB_URL = 'https://vikash-portfolio-f1cd0-default-rtdb.firebaseio.com/resumeUrl.json';

export default function useResumeUrl() {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    fetch(DB_URL)
      .then(res => res.json())
      .then(data => setUrl(data || null))
      .catch(() => setUrl(null));
  }, []);

  return url;
}
