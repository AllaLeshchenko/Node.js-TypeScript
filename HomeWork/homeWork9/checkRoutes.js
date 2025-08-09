import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const URL = `http://localhost:${PORT}`;

const registerUser = async () => {
    try {
        const response = await axios.post(`${URL}/register`, {
            email: 'email@gmail.com',
            password: '12345abcde',
        });

        console.log('Response from server: ' + response.data);
    } catch (error) {
        console.error('Registration errror: ' + error.response?.data || error.message);
    }
};

const changePassword = async () => {
    try {
        const response = await axios.post(`${URL}/change-password`, {
            email: 'email@gmail.com',
            newPassword: 'new54321edcba',
        });
        console.log('Response (change password): ', response.data);
    } catch (error) {
        console.error('Error changing password: ', error.response?.data || error.message);
    }
};

const deleteAccount = async () => {
    try {
        const response = await axios.post(`${URL}/delete-account`, {
        email: 'email@gmail.com',
        password: 'new54321edcba',
    });
       console.log('Response (delete account): ', response.data);
    } catch (error) {
        console.error('Error deleting account: ', error.response?.data || error.message);
    }
};

const accesAdmin = async () => {
    try {
        const response = await axios.post(`${URL}/admin`, {
            email: 'email@gmail.com',
        });
        console.log('Response (admin acces): ', response.data);
    } catch (error) {
        console.error('Admin acces error: ', error.response?.data || error.message);
    }
};

const changeEmail = async () => {
    try {
        const response = await axios.post(`${URL}/change-email`, {
            email: 'email@gmail.com',          // текущий email
            newEmail: 'allamail@gmail.com',    // новый email
            password: 'new54321edcba',         // текущий пароль
        });
        console.log('Response (change email): ', response.data);
    } catch (error) {
        console.error('Error chanching email: ', error.response?.data || eroor.message);
    }
};

(async () => {
  await registerUser();
  await changePassword();
//   await deleteAccount();
  await accesAdmin(); 
  await changeEmail();
})();