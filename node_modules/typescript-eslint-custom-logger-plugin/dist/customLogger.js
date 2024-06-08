const customLogger = {
    log: (logMessage) => {
        console.log(`[${new Date().toISOString()}]: ${logMessage}`);
    },
    error: (errorMessage) => {
        console.error(`[${new Date().toISOString()}]: ERROR ${errorMessage}`);
    },
};
export default customLogger;
