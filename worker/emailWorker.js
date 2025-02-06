const { Worker } = require("bullmq");
const sendEmail = require("../utils/sendEmail");

function startWorker() {
  const worker = new Worker(
    "emailQueue",
    async (job) => {
      console.log("worker recieved the job: ", job.data);
      const emailConfig = job.data;
      await sendEmail(emailConfig);
    },
    {
      connection: {
        url:
          process.env.NODE_ENV === "development"
            ? process.env.REDIS_URL_PUBLIC
            : process.env.REDIS_URL_INTERNAL,
      },
      removeOnComplete: true, // Auto-delete completed jobs
      removeOnFail: {
        age: 86400, // Keep failed jobs for 24 hours (optional)
      },
    }
  );
}

console.log("Worker is running...");

module.exports = startWorker;
