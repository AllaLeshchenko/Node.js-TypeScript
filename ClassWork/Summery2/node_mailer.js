// Импортируем модули
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Создаем обьект "транспортер" - через него отправляются письма
const transporter = nodemailer.createTransport({
    service: 'gmail', // указываем, что используем gmail как SMTP-server
    auth: { // указываем данные для авторизации
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Задаем параметры письма
const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'leshchen.a@gmail.com',
    subject: "Test email",
    text: 'Hello from Node.js and nodemailer!'
}

// Отправляем письмо, вызываея метод sendMail y transporter
transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        return console.error('Error: ', error);
    }
    console.log('Email sent: ', info.response);
});