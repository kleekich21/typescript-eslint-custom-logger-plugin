const customLoggerRule = require("./suggest-custom-logger");
const plugin = { rules: { "suggest-custom-logger": customLoggerRule } };
module.exports = plugin;
