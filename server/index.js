import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import { Server } from "socket.io";
import { createServer } from "http";
import morgan from "morgan";

dotenv.config();
const app = express();
const server=createServer(app);
const io=new Server(server,{
  cors:{
    origin:"*",
    methods:["GET","POST"],
    credentials:true,
  },
});
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/",(req,res)=>{
  res.send("Hello");
})

io.on("connection",(socket)=>{
  console.log("user-connected");
  console.log(socket.id);
})
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
  })
  .then(() => {
    server.listen(PORT, () => console.log(`Server Port: ${PORT}`));

  })
  .catch((error) => console.log(`${error} did not connect`));