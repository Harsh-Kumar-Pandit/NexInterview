import mongoose from "mongoose"

import { ENV } from "./env.js"

export const connectDB = async () => {
    try {
        if (!ENV.MONGO_URL) {
         throw new Error("MONGO_URL environment variable is not set");
        }
        const conn = await mongoose.connect(ENV.MONGO_URL)
        console.log("✅ Connected to MongoDB", conn.connection.host);
        
    } catch (error) {
        console.error("❌ Error connecting to MongoDB", error)
        process.exit(1);//0 means success, 1 means failure
    }
}