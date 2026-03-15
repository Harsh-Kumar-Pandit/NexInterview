import dotenv from "dotenv";

dotenv.config();

export const ENV = {
   PORT: process.env.Port,
   MONGO_URL: process.env.Mongo_Db,
   NODE_ENV: process.env.Node_env
}