import { Router } from "express";
import {
    createTask,
    getTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById
} from "../controllers/taskController.js"

const router: Router = Router();

// Создание задачи
router.post('/', createTask);

// Получить все задачи
router.get('/', getTasks);

// Получить задачу по id
router.get('/:id', getTaskById);

// Обновить задачу по id
router.put('/:id', updateTaskById);

// Удаление задачи по id
router.delete('/:id', deleteTaskById);

export default router;