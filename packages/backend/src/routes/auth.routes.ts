import { Router } from "express";
import { signup, signin, profile } from "../controllers/auth.controllers";
import { validateToken } from "../libs/validateToken";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/profile", validateToken, profile);

export default router;
