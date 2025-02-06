const { Worker } = require("bullmq");
const sendEmail = require("../utils/sendEmail");
require("dotenv").config();

function startWorker() {
  const worker = new Worker(
    "emailQueue",
    async (job) => {
      const emailConfig = job.data;
      await sendEmail(emailConfig);
    },
    {
      connection: {
        host:
          process.env.REDIS_HOST ||
          "redis-14453.crce182.ap-south-1-1.ec2.redns.redis-cloud.com",
        port: process.env.REDIS_PORT || 14453,
        username: "default",
        password:
          process.env.REDIS_PASSWORD || "NkauixLtzRtCoaFdWXySw00g9fDbN83t",
      },
    }
  );
}

console.log("Worker is running...");

module.exports = startWorker;
