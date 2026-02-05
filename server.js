import { configDotenv } from "dotenv";
configDotenv();
import express from "express";

import authRoutes from "./modules/routes/authRoutes";

const app = express();

const PORT = process.env.PORT || 4000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));
