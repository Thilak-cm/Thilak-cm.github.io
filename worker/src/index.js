// Cloudflare Worker — proxies portfolio chat requests to Replicate
// Deploy: cd worker && npx wrangler deploy
// Set secret: npx wrangler secret put REPLICATE_API_TOKEN

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Single shared model version — all PE variants are handled by the same predictor
const MODEL_VERSION = "b9baba8dd415ddaa7ef43c9ad7c58fcec9e764b71aea362557cad89751e0c47a";
const VALID_MODELS = ["Kerple", "ALIBI", "FIRE", "Learned PE", "RoPE", "Sinusoidal"];

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: CORS_HEADERS });
    }

    try {
      const { prompt, model_name = "Kerple", max_new_tokens = 50, temperature = 1.0 } = await request.json();

      if (!prompt || typeof prompt !== "string") {
        return Response.json({ error: "prompt is required" }, { status: 400, headers: CORS_HEADERS });
      }

      if (!VALID_MODELS.includes(model_name)) {
        return Response.json({ error: `Unknown model: ${model_name}` }, { status: 400, headers: CORS_HEADERS });
      }

      // Call Replicate's create-prediction API
      const replicateRes = await fetch("https://api.replicate.com/v1/predictions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
          Prefer: "wait",  // Synchronous — wait for result instead of polling
        },
        body: JSON.stringify({
          version: MODEL_VERSION,
          input: {
            prompt: "\nUser: " + prompt,
            model_name,
            max_new_tokens,
            temperature,
          },
        }),
      });

      if (!replicateRes.ok) {
        const err = await replicateRes.text();
        return Response.json({ error: "Replicate error", detail: err }, { status: 502, headers: CORS_HEADERS });
      }

      const prediction = await replicateRes.json();
      let output = prediction.output;

      // Replicate may return a string or an array of string chunks
      if (Array.isArray(output)) output = output.join("");

      // Clean up: strip echoed user prompt and endoftext tokens
      output = output.replace(`\nUser: ${prompt}`, "").replace(/User:\s*/, "");
      output = output.replace(/<\|endoftext\|>/g, ".").trim();
      if (!output) output = "...";

      return Response.json({ text: output }, { headers: CORS_HEADERS });

    } catch (err) {
      return Response.json({ error: err.message }, { status: 500, headers: CORS_HEADERS });
    }
  },
};
