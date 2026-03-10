import "dotenv/config";
import express from "express";
import cors from "cors";
import { askGemini } from "./services/api.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/ask-gemini", async (req, res) => {
  const { prompt } = req.body;

  const response = await askGemini(prompt);

  res.json({
    output: response,
  });
});

app.listen(port, () => {
  console.log(`Backend listening on port:${port}`);
});
