import express from 'express';
import dotenv from 'dotenv';
import cartRouter from './routes/cartRoutes.js'
import connectDB from './db/index.js';
dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use('/api', cartRouter)

app.get('/', (_, res) => {
  res.send('Home page');
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});