import fs from "fs";

export function saveMemory(entry) {
  const data = JSON.parse(fs.readFileSync("memory.json"));
  data.history.push(entry);
  fs.writeFileSync("memory.json", JSON.stringify(data, null, 2));
}
