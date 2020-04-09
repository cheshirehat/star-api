import { Router } from "express";
import Star from "./star";

const router = Router();

router.use("/star", Star);

export default router;
