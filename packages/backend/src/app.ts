import { config } from "dotenv";
config();

import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import authRoutes from "./routes/auth.routes";

// setting up
const app: Application = express();

// global variables
app.set("PORT", process.env.PORT || 4000);

// routes
app.use("/api/auth", authRoutes);

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

export default app;
