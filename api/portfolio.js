import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export default async function handler(req, res) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const dataPath = path.join(__dirname, "../src/data.json");
  const data = JSON.parse(
    await fs.readFile(dataPath, "utf-8")
  );
  res.status(200).json(data);
}