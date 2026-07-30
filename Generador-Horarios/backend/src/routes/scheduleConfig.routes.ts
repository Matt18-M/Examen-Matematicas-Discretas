import { Router } from "express";

import { createScheduleConfigController, getScheduleConfigsController, getScheduleConfigByIdController, updateScheduleConfigController, deleteScheduleConfigController } from "../controllers/scheduleConfig.controller.js";
import { validateConfig, validateId } from "../middlewares/validation.middleware.js";

const router = Router();

// Crear configuración
router.post("/", validateConfig, createScheduleConfigController);

// Obtener todas las configuraciones
router.get("/", getScheduleConfigsController);

// Obtener configuración por ID
router.get("/:id", validateId, getScheduleConfigByIdController);

// Actualizar configuración
router.put("/:id", validateId, validateConfig, updateScheduleConfigController);

// Eliminar configuración
router.delete("/:id", validateId, deleteScheduleConfigController);

export default router;