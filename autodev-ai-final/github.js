import { execSync } from "child_process";

export function pushAndPR() {
  execSync("git push origin main");
  execSync("gh pr create --title 'AI Update' --body 'Automated changes'");
}
