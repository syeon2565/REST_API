import { Router } from "express";
import auth from "./auth";
import post from "./post";
import user from "./user";

const router = Router();

router.use(auth);
router.use(post);
router.use(user);

export default router;
