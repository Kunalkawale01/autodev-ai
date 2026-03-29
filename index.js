import { saveMemory } from "./memory.js";

function fakeDelay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function generateResponse(task) {
  task = task.toLowerCase();

  let build = "";
  let review = "";
  let test = "";

  if (task.includes("bug") || task.includes("fix")) {
    build = `
👷 BUILDER AGENT:
✔ Detected bugs and fixed logic

Result:
- Bugs resolved
`;

    review = `
🔍 REVIEWER AGENT:
✔ Verified fixes
✔ Suggested improvements
`;

    test = `
🧪 TESTER AGENT:
✔ Created test cases
✔ Verified outputs
`;
  }

  else if (task.includes("feature") || task.includes("add")) {
    build = `
👷 BUILDER AGENT:
✔ Implemented new feature
✔ Updated structure
`;

    review = `
🔍 REVIEWER AGENT:
✔ Checked scalability
`;

    test = `
🧪 TESTER AGENT:
✔ Feature tested successfully
`;
  }

  else if (task.includes("performance") || task.includes("optimize")) {
    build = `
👷 BUILDER AGENT:
✔ Optimized slow code
✔ Reduced execution time
`;

    review = `
🔍 REVIEWER AGENT:
✔ Checked efficiency
`;

    test = `
🧪 TESTER AGENT:
✔ Performance improved
`;
  }

  else {
    build = `
👷 BUILDER AGENT:
✔ Processed task: "${task}"
`;

    review = `
🔍 REVIEWER AGENT:
✔ General review completed
`;

    test = `
🧪 TESTER AGENT:
✔ Basic validation done
`;
  }

  return { build, review, test };
}

async function run(task) {
  await fakeDelay(300);
  const result = generateResponse(task);

  saveMemory({ task, date: new Date() });

  return result;
}

export default run;
