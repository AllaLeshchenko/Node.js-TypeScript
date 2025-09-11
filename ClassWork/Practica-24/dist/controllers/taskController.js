// Имитация БД
let tasks = [];
let currentId = 1;
// Создание задачи
export const createTask = (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.send({ error: 'Title is required' });
    }
    const newTask = {
        id: currentId++,
        title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).send({ message: 'Task create', newTask });
};
// Получить все задачи
export const getTasks = (_, res) => {
    res.send(tasks);
};
// Получить задачу по id
export const getTaskById = (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(task => task.id === id);
    if (!task) {
        return res.status(404).send({ error: 'Task not found' });
    }
    // возвращаем ответ 
    res.status(200).send(task);
};
// Обновить задачу по id
export const updateTaskById = (req, res) => {
    const id = Number(req.params.id);
    const { title, completed } = req.body;
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
    };
    res.send(tasks[indexTask]);
};
// Удаление задачи по id
export const deleteTaskById = (req, res) => {
    const id = Number(req.params.id);
    tasks = tasks.filter(task => task.id !== id);
    res.status(204).send({ message: 'Object deleted successfully' });
};
//# sourceMappingURL=taskController.js.map