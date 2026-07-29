import { Router } from "express";

import { createScheduleConfigController, getScheduleConfigsController, getScheduleConfigByIdController, updateScheduleConfigController, deleteScheduleConfigController } from "../controllers/scheduleConfig.controller.js";

const router = Router();

router.post("/", createScheduleConfigController);

router.get("/", getScheduleConfigsController);

router.get("/:id", getScheduleConfigByIdController);

router.put("/:id", updateScheduleConfigController);

router.delete("/:id", deleteScheduleConfigController);

export default router;
