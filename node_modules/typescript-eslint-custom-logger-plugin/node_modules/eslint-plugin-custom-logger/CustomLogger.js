module.exports = CustomLogger = {
  getTimeStamp: () => {
    return new Date().toISOString();
  },
  log: (logMessage) => {
    console.log(`[${this.getTimeStamp()}]: ${logMessage}`);
  },
  error: (errorMessage) => {
    console.error(`[${this.getTimeStamp()}]: ERROR ${errorMessage}`);
  },
};
