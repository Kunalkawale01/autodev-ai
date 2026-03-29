import { execSync } from "child_process";

export function autoCommit(message) {
  try {
    execSync("git add .");
    execSync(`git commit -m "AI: ${message}"`);
    console.log("✅ Git commit successful");
  } catch (err) {
    console.log("⚠️ Git not initialized or commit failed (skipping)");
  }
}
