const { Worker } = require("bullmq");
const sendEmail = require("../utils/sendEmail");
require("dotenv").config();

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
            ? process.env.REDIS_HOST_DEV
            : process.env.REDIS_HOST_PROD,
      },
    }
  );
}

console.log("Worker is running...");

module.exports = startWorker;
