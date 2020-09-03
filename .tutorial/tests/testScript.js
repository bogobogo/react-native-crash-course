const { spawn } = require("child_process");
const { writeFileSync } = require("fs");
const { join } = require("path");

const args = process.argv.slice(2);
const testPath = args[0];
const stepId = args[1];

const isValidTestData = (procOutput) => procOutput.numTotalTests !== undefined;
const isTestSuccessful = (testData) =>
  testData.numPassedTests / testData.numTotalTests === 1;

const successMessage = (totalTests) =>
  "\
🏆🏆🏆 \nGreat,\033[0;32m all " +
  totalTests +
  " tests have passed! 😄 \033[0m \n🏆🏆🏆 \
";

const failMessage = (totalTests, testPassed) =>
  "👾👾👾\nOops, Looks like \033[0;31m you got " +
  `${totalTests - testPassed} out of ${totalTests} tests wrong 🤪` +
  "\n\033[0mKeep going, you can do this! 💪\n👾👾👾";

const testProcess = spawn("npm", [
  "run",
  "jest-test",
  "--",
  '--reporters="<rootDir>/.tutorial/tests/my-custom-reporter.js"',
  "--",
  '--config="<rootDir>/.tutorial/tests/config.js"',
  "--",
  testPath,
]);

testProcess.stdout.on("data", (data) => {
  try {
    console.log(data.toString());
    // const testData = Buffer.isBuffer(data)
    //   ? JSON.parse(data.toString())
    //   : JSON.parse(data);
    // if (isValidTestData(testData)) {
    //   if (isTestSuccessful(testData)) {
    //     console.log(successMessage(testData.numTotalTests));
    //   } else {
    //     console.log(
    //       failMessage(testData.numTotalTests, testData.numPassedTests)
    //     );
    //   }
    // }
  } catch (e) {
    console.log(e);
  }
});

testProcess.stderr.on("data", (data) => {
  // console.error(`stderr: ${data}`);
});

testProcess.on("close", (code) => {
  writeFileSync(join(__dirname, `./tmp/${stepId}.txt`), code.toString());
  // console.log(`child process exited with code ${code}`);
});
