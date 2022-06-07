import express from "express";
import { getData } from "../controller/Sensor.js";

const router = express.Router();
router.get("/data", getData);

export default router;