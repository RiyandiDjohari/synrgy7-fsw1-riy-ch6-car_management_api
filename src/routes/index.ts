import { Router } from "express";
import { carsRouter } from "./carsRouter";
import superadminAuthRouter from "./superadmin/authRouter";
import authRouter from "./authRouter";
import { checkAuth } from "../middlewares/auth";
import { getInfoUser } from "../controller/userController";

const router = Router();

router.use("/cars", carsRouter);
router.use("/superadmin/auth", superadminAuthRouter);
router.use("/auth", authRouter);
router.use("/me", checkAuth, getInfoUser);

export default router;
