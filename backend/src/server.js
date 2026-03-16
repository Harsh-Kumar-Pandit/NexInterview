import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();
const Port = ENV.PORT;
const Mongo_Url = ENV.MONGO_URL;

const __dirname = path.resolve();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(Port, () => console.log("Server is running on port", Port));
  } catch (error) {
    console.error("💥 Error starting the server", error);
    
  }
};

startServer();
