import { Router } from "express";

import {
  calculateCombinationsController
} from "../controllers/scheduler.controller.js";

const router = Router();

router.get("/combinations", calculateCombinationsController);

export default router;