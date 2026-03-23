import express from "express";
import payload from "payload";
import path from "path";

require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });

const app = express();

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || "super-secret-key-change-me",
    mongoURL: process.env.MONGODB_URI || "",
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(process.env.PORT || 3001, () => {
    payload.logger.info(`Payload CMS listening on port ${process.env.PORT || 3001}`);
  });
};

start();
