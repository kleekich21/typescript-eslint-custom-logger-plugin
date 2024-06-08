import customLogger from "./src/customLogger.ts";

function correctLogFunction(a) {
  customLogger.log("correct! customLogger is used!");
}

function correctErrorLogFunction(a) {
  customLogger.error("correct! customLogger is used for error!");
}

function incorrectFunction(a) {
  console.log("Incorrect! console.log is used ");
}
