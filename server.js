import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import run from "./index.js";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve UI
app.use(express.static(path.join(__dirname, "ui")));

// main API
app.post("/run", async (req, res) => {
  const result = await run(req.body.task);
  res.json(result);
});

// memory API
app.get("/memory", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("memory.json"));
    res.json(data);
  } catch {
    res.json({ history: [] });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
