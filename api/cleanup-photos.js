// Vercel Serverless Function — deletes a batch of Cloudinary images by public_id.
// Credentials (API key/secret) live only here as environment variables, never
// shipped to the browser. Called by the app's periodic cleanup check to remove
// photos from orders that finished a while ago, keeping storage usage bounded.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { publicIds, secret } = req.body || {};

  if (!process.env.CLEANUP_SECRET || secret !== process.env.CLEANUP_SECRET) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  if (!Array.isArray(publicIds) || publicIds.length === 0) {
    res.status(400).json({ error: "publicIds must be a non-empty array" });
    return;
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    res.status(500).json({ error: "Server missing Cloudinary credentials (check Vercel env vars)" });
    return;
  }

  try {
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
    // Cloudinary allows deleting up to 100 resources per Admin API call.
    const results = [];
    for (let i = 0; i < publicIds.length; i += 100) {
      const batch = publicIds.slice(i, i + 100);
      const params = new URLSearchParams();
      batch.forEach((id) => params.append("public_ids[]", id));

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?${params.toString()}`,
        { method: "DELETE", headers: { Authorization: `Basic ${auth}` } }
      );
      const data = await response.json();
      results.push(data);
    }
    res.status(200).json({ success: true, results });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
