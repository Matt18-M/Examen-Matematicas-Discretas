import { Router } from "express";

import { calcularNumeroCombinacionesController, generarCombinacionesController, analizarConjuntoController, generarCombinacionesMateriasController, generarHorariosValidosController, generarHorariosController } from "../controllers/scheduler.controller.js";
const router = Router();

router.get("/combinations", calcularNumeroCombinacionesController);

router.post("/generate", generarCombinacionesController);

router.post("/set", analizarConjuntoController);

router.get("/courses", generarCombinacionesMateriasController);

router.get("/validos", generarHorariosValidosController);

router.post("/schedules/generate", generarHorariosController);

export default router;