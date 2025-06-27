import express from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import "./passport/passport";
import authRoutes from "./routes/auth_route";
import userRoutes from "./routes/users_route";

const app = express();

mongoose.connect(process.env.MONGO_URI!, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/users", userRoutes);


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: "CVGo.sid",
    secret: process.env.COOKIE_KEY!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);


app.listen(4000, () => console.log("CVGo backend at :4000"));
