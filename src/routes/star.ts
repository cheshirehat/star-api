import { Router } from "express";
import { getStarsHandler, getStarHandler } from "../controller/starController";

const router = Router();

router.get("/", getStarsHandler);
router.get("/:id", getStarHandler);

export default router;
