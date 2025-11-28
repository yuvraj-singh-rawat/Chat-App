import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";

dotenv.config({});

// const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin: ['http://localhost:5173', 'https://uv-chat-seven.vercel.app'],
    credentials: true
};

app.use(cors(corsOption));

// routes 
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute)

// http://localhost:8080/api/v1/user/register

app.get("/", (req, res) => {
    res.send("Chat App Backend is Running 🚀");
});

server.listen(PORT, () => {
    connectDB();
    console.log(`Server listening on port ${PORT}`);
})