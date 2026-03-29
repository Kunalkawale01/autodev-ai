import { saveMemory } from "./memory.js";

function fakeDelay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function generateResponse(task) {
  task = task.toLowerCase();

  let build = "";
  let review = "";
  let test = "";

  // 🐛 BUG FIXING
  if (task.includes("bug") || task.includes("fix")) {
    build = `
👷 BUILDER AGENT:
✔ Scanned project files
✔ Detected logical bugs
✔ Fixed incorrect operations

Result:
- Bugs resolved successfully
- Code stabilized
`;

    review = `
🔍 REVIEWER AGENT:
✔ Checked bug fixes
✔ Ensured no regression issues

Feedback:
- Use strict equality (===)
- Add error handling
`;

    test = `
🧪 TESTER AGENT:
✔ Generated test cases for bug scenarios
✔ Verified correct outputs

Example:
Input: add(2,3)
Output: 5 ✅
`;
  }

  // ✨ FEATURE CREATION
  else if (task.includes("feature") || task.includes("add")) {
    build = `
👷 BUILDER AGENT:
✔ Designed new feature
✔ Created required logic and structure

Result:
- Feature implemented successfully
- Integrated into project
`;

    review = `
🔍 REVIEWER AGENT:
✔ Reviewed new feature
✔ Ensured clean architecture

Feedback:
- Follow modular design
- Keep components reusable
`;

    test = `
🧪 TESTER AGENT:
✔ Created feature test cases
✔ Validated functionality

Example:
Feature works as expected ✅
`;
  }

  // ⚡ PERFORMANCE
  else if (task.includes("performance") || task.includes("optimize")) {
    build = `
👷 BUILDER AGENT:
✔ Optimized slow functions
✔ Reduced unnecessary loops

Result:
- Performance improved
- Faster execution time
`;

    review = `
🔍 REVIEWER AGENT:
✔ Verified optimizations
✔ Checked memory efficiency

Feedback:
- Avoid redundant calculations
- Use caching where possible
`;

    test = `
🧪 TESTER AGENT:
✔ Benchmarked performance
✔ Compared before/after

Result:
Execution time reduced ✅
`;
  }

  // 📚 DEFAULT
  else {
    build = `
👷 BUILDER AGENT:
✔ Analyzed request: "${task}"
✔ Applied general improvements

Result:
- Task processed successfully
`;

    review = `
🔍 REVIEWER AGENT:
✔ Reviewed overall structure
✔ Suggested best practices
`;

    test = `
🧪 TESTER AGENT:
✔ Created basic validation tests
✔ Verified outputs
`;
  }

  return { build, review, test };
}

async function run(task) {
  console.log("🚀 AI Dev Team Running...\n");

  await fakeDelay(300);

  const result = generateResponse(task);

  saveMemory({ task, date: new Date() });

  return result;
}

export default run;