import express from "express";
import { createAppointment } from "../Controllers/AppointmentController.ts";

const router = express.Router();

router.post("/create", createAppointment);

export default router;
