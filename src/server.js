import express from "express";
import userRouter from "./routes/user.routes.js";
import 'dotenv/config';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const server = express();

const corsConfig = {
  origin: process.env.API_URL || 'http://localhost:5173',
  methods: ["GET", "POST"]
};

server.use(cors(corsConfig));
server.use(express.json());
server.use("/api", userRouter);


server.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
