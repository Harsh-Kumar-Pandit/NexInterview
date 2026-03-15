import dotenv from "dotenv";

dotenv.config();

export const ENV = {
   PORT: process.env.Port,
   MONGO_URL: process.env.MONGO_URL
}