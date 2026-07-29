import { Router } from "express";

import {calculateCombinationsController, generateCombinationsController} from "../controllers/scheduler.controller.js";

const router = Router();

router.get("/combinations", calculateCombinationsController);

router.post("/generate", generateCombinationsController);

export default router;