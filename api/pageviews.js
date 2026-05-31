export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const response = await fetch(
      'https://api.counterapi.dev/v1/vikashraj-portfolio/pageviews/up'
    );
    const data = await response.json();
    res.status(200).json({ count: data.count });
  } catch {
    res.status(500).json({ count: null });
  }
}
