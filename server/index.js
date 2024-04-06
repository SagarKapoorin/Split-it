import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import { Server } from "socket.io";
import { createServer } from "http";
import morgan from "morgan";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";

import { Strategy } from "passport-google-oauth20";
//<---------------------------------------------------->
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
const store=MongoStore.create({
  mongoUrl:process.env.MONGO_URL,
  crypto:{
      secret:process.env.SECRET
  },
  touchAfter:24*3600,             //if not change in session data not need to update session to limit time
})
const session_options={
  store,
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized:true,
  cookie:{
      expires:Date.now()+1000*60*60*24*7,  //7days
      maxAge:1000*60*60*24*7,
      httpOnly:true,
  }
}
store.on("error",()=>{
  console.log("error in mongostore",err);
});
//<---------------------------------------------------------------->
app.use(session(session_options));
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

passport.use(
 new Strategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:6001/auth/google/callback",
  scope:["profile","email"]
 },async (accessToken, refreshToken, profile, done) =>{
  try{
    console.log(profile);
    return done(null,profile)
  }catch(err){
    console.log(err);
    return done(err,null);
  }
 })
)
passport.serializeUser((user,done)=>{
  done(null,user);
})
passport.deserializeUser((user,done)=>{
  done(null,user);
})
// <------------------------------------------------------------->
app.get("/no",(req,res)=>{
  res.send("Hello");
})
app.get("/yes",(req,res)=>{
  res.send("yo");
})

app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
  failureRedirect:"/no"
}),function(req,res){
  res.redirect("/yes");
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