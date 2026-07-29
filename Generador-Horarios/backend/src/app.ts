import express from "express";
import cors from "cors";

import courseRoutes from "./routes/course.routes.js";
import scheduleConfigRoutes from "./routes/scheduleConfig.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/courses", courseRoutes);
app.use("/config", scheduleConfigRoutes);
export default app;