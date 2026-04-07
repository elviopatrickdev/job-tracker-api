import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from './routes/jobRoutes.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/auth', authRoutes);   
app.use('/users', userRoutes);
app.use('/jobs', jobRoutes);

export default app;