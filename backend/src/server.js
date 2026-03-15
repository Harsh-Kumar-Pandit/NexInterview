import express, { json } from "express"
import { ENV } from "./lib/env.js";

const app = express();
const Port = ENV.PORT;
const Mongo_Url = ENV.MONGO_URL;

app.get("/health", (req, res)=> {
    res.status(200).json({msg:"api is up and running"});
})

app.listen(Port, () => {
    console.log("Server is running on port ", Port);
    
})