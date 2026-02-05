import { configDotenv } from "dotenv";
configDotenv();
import express from "express";

import authRoutes from "./modules/routes/authRoutes.js";
import connectDb from "./infra/configs/db.config.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api/auth", authRoutes);

connectDb();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));
