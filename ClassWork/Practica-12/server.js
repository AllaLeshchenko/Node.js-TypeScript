import express from "express";
import { connectToDatabase, getDb } from "./db/index.js";
import { ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process .env.PORT;

connectToDatabase()
    .then(()=> app.listen(PORT, ()=> {
        console.log(`Server running on http://localhost:3000`)
    }))
    .catch( err => console.error('Failed to start the server due to MongoDB connection issue', err));

app.use(express.json());

app.get('/', (_req, res) => {
    res.send('Home page');
});

//Создание маршрута POST /users – создание нового пользователя
app.post('/users', async (req, res) => {
    try {
        const db = getDb();
        const user = req.body; // Получаем данные пользователя из тела запроса

      // Валидация данных ( например проверка обязательных полей)
        if(!user.name || !user.email) {
            return res.status(400).send({error: 'Name and email are required'});
        }
         const result = await db.collection('users').insertOne(user); // Добавляем пользователя в коллекцию
         console.log(result);
         res.status(201).send(result); // Возвращаем созданого пользователя
    } catch (error) {
        res.status(500).send({error: 'Failed to create user'});
    }
});

//Создание маршрута GET /users – получение списка всех пользователей
app.get('/users', async (req, res) => {
    try {
        const db = getDb();
        const users = await db.collection('users').find().toArray(); // Получаем всех пользователей

        res.status(200).send(users); // Возвращаем список всех пользователей
    } catch (error) {
        res.status(500).send({error: 'Failed to fetch users'})
    }
});

//Создание маршрута GET /users/:id – получение одного пользователя по ID
app.get('/user/:id', async (req, res) => {
    try {
        const db = getDb();
        const userId = req.params.id; // Содержит ID пользователя из URL

        if(!ObjectId.isValid(userId)) { // Проверяет, явлется ли ID доступным форматом Object
            return res.status(400).send(err, 'Invalid user ID')
        }
        const user = await db.collection('users').findOne({_id: new ObjectId(userId)});
        if(!user) {
            return res.status(404).send(err, 'User not found')
        }
        res.status(200).send(user) // Возвращаем данные пользователя
    } catch(error) {
        res.status(500).send(error, 'Failed to fetch user');
    }
});

// Создание маршрута PUT /users/:id – обновление информации о пользователе
app.put('/users/:id', async (req, res) => {
    try {
        const db = getDb();
        const userId = req.params.id;
        const updateData = req.body; // Получаем данные для обновления из тела запроса 

        //Проверяем корректность ID
      if( !ObjectId.isValid(userId) ) {
          return res.status(400).send({error: 'Invalid user ID'})
      }
      const result = await db.collection('users').updateOne(
        { _id: new ObjectId(userId) },
        { $set: updateData } // Обновляем данные пользователя
      );
      if( result.matchedCount === 0 ){
        return res.status(404).send({error: 'User no found'});
      }
     res.status(200).send({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).send({error: 'Failed to update user'})
    }
});

// Создание маршрута DELETE /users/:id – удаление пользователя
app.delete('/users/:id', async (req, res) => {
    try{
        const db = getDb();
        const userId = req.params.id;

        // Проверяем корректность Id
    if(!ObjectId.isValid(userId)) {
        return res.status(400).send({error: 'Invalid user ID'});
    }

    const result = 
    await db.collection('users').deleteOne({_id: new ObjectId(userId)}); // Удаляем пользователя

    if(result.deletedCount === 0) {
        return res.status(404).send({error: 'User not found'});
    }
    res.status(200).send({message: 'User deleted successfully'});
    } catch (error) {
        res.status(500).send({error: 'Failed to delete user'})
    }
});




// {
//   "name": "Ameli Sweet",
//   "email": "ameli@example.com" 
// }