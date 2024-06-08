const customLogger = {
  log: (logMessage: string) => {
    console.log(`[${new Date().toISOString()}]: ${logMessage}`);
  },
  error: (errorMessage: string) => {
    console.error(`[${new Date().toISOString()}]: ERROR ${errorMessage}`);
  },
};

export default customLogger;
