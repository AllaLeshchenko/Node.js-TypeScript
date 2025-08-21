import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function authToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Access token is missing or invalid'})
    }
}
