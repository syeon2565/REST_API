import { Router } from "express";
import auth from "./auth";
import post from "./post";

const router = Router();

router.use(auth);
router.use(post);

export default router;
