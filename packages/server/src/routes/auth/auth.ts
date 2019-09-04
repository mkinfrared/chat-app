import { Router } from "express";

import { registerController } from "@controllers/auth";

const router = Router();

router.post("/auth/register", registerController);

export default router;
