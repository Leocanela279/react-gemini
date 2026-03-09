import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    supabaseConfigured: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY)
  });
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
