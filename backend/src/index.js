import "dotenv/config";
import express from "express";
import cors from "cors";
import { askGemini } from "./services/api.js";
import { supabase } from "./database/connection.js";

const app = express();
const port = process.env.PORT || 3001;
const tableName = process.env.SUPABASE_TABLE || "preguntas";

app.use(cors());
app.use(express.json());

app.post("/ask-gemini", async (req, res) => {
  try {
    const { prompt, ciudad } = req.body;

    const output = await askGemini(prompt);

    const { error } = await supabase.from("output_response").insert([
      {
        fecha: new Date().toISOString(),
        ciudad: ciudad || "No especificada",
        output: output,
      },
    ]);
    if (error) {
      console.error("Supabase insert error:", error.message);
    }

    res.json({
      output,
      dbSaved: !error,
      dbError: error?.message ?? null,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Backend listening on port:${port}`);
});
