import fs from "fs";

export function saveMemory(entry) {
  let data = { history: [] };

  try {
    data = JSON.parse(fs.readFileSync("memory.json"));
  } catch {}

  data.history.push(entry);

  fs.writeFileSync("memory.json", JSON.stringify(data, null, 2));
}
