import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import virtuosoRoutes from './routes/virtuosoRoutes.js';

//seting up dotenv environment
dotenv.config();

const app = express();
app.use(cors()); //additional middleware which calls function cors

//additional middleware which calls function json which accepts object by setting limit up to 50GB
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/virtuoso', virtuosoRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from VirtuosoAI!');
    });

const Startserver = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server is running on http://localhost:8080/'));
    } catch (error) {
       console.log(error); 
    }
}
Startserver();