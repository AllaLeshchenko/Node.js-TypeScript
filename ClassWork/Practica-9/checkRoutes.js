import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3003;
const URL = `http://localhost:${PORT}`;

const registerUser = async () => {
  try {
    const response = await axios.post(`${URL}/register`, {
      username: 'testuser',
      password: 'testpassword',
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error registering user:', error);
  }
};

const loginUser = async () => {
  try {
    const response = await axios.post(`${URL}/login`, {
      username: 'testuser',
      password: 'testpassword',
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error login user:', error);
  }
};

(async () => {
  await registerUser();
  await loginUser();
})();



// import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

// const PORT = process.env.PORT;
// const URL =`http://localhost:${PORT}`

// const registerUser = async () => {
//     try {
//         const response = await axios.post(`${URL}/register`, {
//             username: 'Alex',
//             password: 'ihqu3hrf8ofg734ytuywhbfg82rt',
//         });
//         console.log('Ответ сервера: ' + response.data);
//     } catch (error) {
//         console.error('Ошибка регистрации: ' + error.response?.data || error.message);
//     }
// };

// const loginUser = async () => {
//     try {
//         const response = await axios.post(`${URL}/login`, {
//             username: 'Alex',
//             password: 'ihqu3hrf8ofg734ytuywhbfg82rt',
//         });
//         console.log('Ответ сервера: ' + response.data);
//     } catch (error) {
//         console.error('Error login user: ' + error.response?.data || error.message);
//     }
// };

// (async () => { await 
//     registerUser();
//     loginUser();
// })();

