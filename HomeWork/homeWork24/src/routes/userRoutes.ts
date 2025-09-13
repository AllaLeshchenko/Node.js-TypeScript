import { Router } from "express";
import { createUser, getUsers } from "../controllers/taskController.js";

const router:Router = Router();

router.post('/', createUser);
router.get('/', getUsers);

export default router;