import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

const BASE_URL = `http://localhost:${PORT}`;

(async () => {
  try {
    const home = await axios.get(`${BASE_URL}/`);
    console.log('GET /', home.data);

    const about = await axios.get(`${BASE_URL}/about`);
    console.log('GET /about', about.data);

    const contacts = await axios.get(`${BASE_URL}/contacts`);
    console.log('GET /contacts', contacts.data);

    await axios.get(`${BASE_URL}/undefined`);
  } catch (err) {
    console.log('GET /undefined', err.message);
  }

  try {
    const submit = await axios.post(`${BASE_URL}/submit`);
    console.log('POST /', submit.data);

    await axios.post(`${BASE_URL}/undefined`);
  } catch (err) {
    console.log('POST /undefined', err.message);
  }

  try {
    await axios.put(`${BASE_URL}/`);
  } catch (err) {
    console.log('PUT /', err.message);
  }
})();

// import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

// const PORT = process.env.PORT;

// const BASE_URL = `http://localhost:${PORT}`;

// (async () => {
//     try {
//         const home = await axios.get(`${BASE_URL}/`)
//         console.log('GET /', home.data);
         
//         const about = await axios.get(`${BASE_URL}/about`)
//         console.log('GET /', about.data);

//         const contact = await axios.get(`${BASE_URL}/contact`)
//         console.log('GET /', contact.data);
        
//         await axios.get(`${BASE_URL}/undefined`)
//     }
//     catch (error) {
//         console.log('GET /undefined', error.message);
//     }
// })();