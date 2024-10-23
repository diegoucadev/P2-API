import express from "express";
import userRouter from "./routes/user.routes.js";
import cors from 'cors';

const PORT = 3000;

const server = express();

const corsConfig = {
  origin: 'http://159.65.185.107:5000',
  methods: ["GET", "POST"]
};

server.use(cors(corsConfig));
server.use(express.json());
server.use("/api", userRouter);


server.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
