import { NextFunction, Request, Response } from "express";
import { Task } from "models/Task";

// создадим тип при получени входящих данные для обновления
type reqBodyUpdate = { title: string | undefined, completed: boolean | undefined };

// Имитация БД
let tasks: Task[] = [];
let currentId: number = 1;

// Создание задачи
export const createTask = (req: Request, res: Response) => {
    const { title }: { title: string } = req.body;

    if (!title) {
        return res.send({ error: 'Title is required' });
    }

    const newTask: Task = {
        id: currentId++,
        title,
        completed: false
    }
    tasks.push(newTask);
    res.status(201).send({ message: 'Task create', newTask });
}

// Получить все задачи
export const getTasks = (_: Request, res: Response) => {
    res.send(tasks);
}

// Получить задачу по id
export const getTaskById = (req: Request, res: Response, next: NextFunction) => {
    const id: number = Number(req.params.id);
    const task = tasks.find(task => task.id === id);

    if(!task){
        next(new Error('Error get task by id'))
        return res.status(404).send({error: 'Task not found'});
    }
    // возвращаем ответ 
    res.status(200).send(task);
}

// Обновить задачу по id
export const updateTaskById = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const { title, completed }: reqBodyUpdate = req.body;

    const indexTask = tasks.findIndex(task => task.id === id);

    if (indexTask === -1) {
        return res.status(404).send({ error: 'Task not found' });
    }

    // tasks[indexTask] = {
    //     id: 2,
    //     title: "Text",
    //     completed: false
    // }
    tasks[indexTask] = {
        id: tasks[indexTask].id,
        // ...tasks[indexTask],// = id: 2, title: "Text", completed: false
        title: title ?? tasks[indexTask].title,
        completed: completed ?? tasks[indexTask].completed
    }
    res.send(tasks[indexTask]);
}

// Удаление задачи по id
export const deleteTaskById = (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    tasks = tasks.filter(task => task.id !== id);
    res.status(204).send({message: 'Object deleted successfully'});
}