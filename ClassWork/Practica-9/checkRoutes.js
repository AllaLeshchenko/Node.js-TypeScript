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
    console.log('Ответ сервера: ' + response.data);
  } catch (error) {
    console.error('Error registering user:', error.response?.data || error.message);
  }
};

const loginUser = async () => {
  try {
    const response = await axios.post(`${URL}/login`, {
      username: 'testuser',
      password: 'testpassword',
    });
    console.log('Ответ сервера: ' + response.data);
  } catch (error) {
    console.error('Error login user:', error);
  }
};

const getUserById = async () => {
  try {
    const response = await axios.get(`${URL}/profile/1`);
    console.log('Oтвет от сервера: ' + JSON.stringify(response.data));
  } catch (error) {
    console.error('Error getUserById:', error.message);
  }
};

const updateUserById = async () => {
  try {
    const response = await axios.put(`${URL}/profile/1`, {
      email: 'newemail@gmail.com',
      name: 'Bob',
    });
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.error('Error getting user by ID:', error.message);
  }
};

(async () => {
  await registerUser();
  await loginUser();
  await getUserById();
  await updateUserById();
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

