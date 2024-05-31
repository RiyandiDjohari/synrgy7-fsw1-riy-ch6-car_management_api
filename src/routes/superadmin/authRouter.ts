import express from "express";
import { login, register } from "../../controller/superadmin/authController";
import { checkAuth, isSuperAdmin } from "../../middlewares/auth";

const superadminAuthRouter = express.Router();

superadminAuthRouter.post("/login", login);
superadminAuthRouter.post("/register", checkAuth, isSuperAdmin, register);

export default superadminAuthRouter;
