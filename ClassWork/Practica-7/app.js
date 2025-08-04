import express from 'express';
import sequelize from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get('/', (req, res, next) => {
    try{
        if(false){
            res.send({success:true, message: 'All is working'})
        }else{
            throw new Error('Error in if')
        }
    }catch(err){
        next(err)
    }
});

app.use((err, _req, res, _next) => {
    console.error(err.message);
    res.status(500).send({success: false, message: err.message})
});

app.listen(PORT, async () => {
    try{
        await sequelize.authenticate();
        console.log(`Connection to the database has been successfully`)
        console.log(`Server is running on http://localhost:${PORT}`)
    }catch(err) {
        console.error('Do not correct connection to the database: ' + err)
    }
});