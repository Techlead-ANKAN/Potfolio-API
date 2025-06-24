import fs from "fs/promises";

export default async function handler(req, res) {
  const data = JSON.parse(
    await fs.readFile(new URL("../../src/data.json", import.meta.url), "utf-8")
  );
  res.status(200).json(data);
}