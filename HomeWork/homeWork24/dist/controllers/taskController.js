import User from "../models/productSchema.js";
// Создание пользователя
export const createUser = async (req, res) => {
    try {
        const { name, age } = req.body;
        const user = await User.create(req.body);
        res.status(201).json({ message: 'User created successfully', user });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
// Получение всех пользователей
export const getUsers = async (_, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//# sourceMappingURL=taskController.js.map