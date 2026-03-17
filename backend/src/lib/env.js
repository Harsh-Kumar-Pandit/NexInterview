import dotenv from "dotenv";

dotenv.config({quiet: true});

export const ENV = {
  PORT: process.env.PORT || 3000,
  MONGO_URL: process.env.MONGO_DB,
  NODE_ENV: process.env.NODE_ENV,

  INNGEST: {
    EVENT_KEY: process.env.INNGEST_EVENT_KEY,
    SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
  },

  STREAM: {
    API_KEY: process.env.STREAM_API_KEY,
    API_SECRET: process.env.STREAM_API_SECRET,
  },

  CLERK: {
    PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    SECRET_KEY: process.env.CLERK_SECRET_KEY,
  },

  CLIENT_URL: process.env.CLIENT_URL,
};