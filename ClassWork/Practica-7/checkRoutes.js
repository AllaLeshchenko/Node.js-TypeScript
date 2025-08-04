import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3003;

(async()=> {
    try{
        // const response = await axios.get(`http://localhost:${PORT}`)
        // console.log(response.data);
        const responsPost = await axios.get(`http://localhost:${PORT}`);
        console.log(responsPost, data);
    }catch(err){
        console.error(err.response.data);
    }
})();