import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3003;

(async () => {
    const response = await axios.post(`http://localhost:${PORT}/data`, {
        userId:3,
        userName: 'Alla',
    });
    console.log(response)
} catch(err) {
    console.error
}
)();