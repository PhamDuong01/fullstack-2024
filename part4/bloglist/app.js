import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import utils from './utils/index.js';
import blogsRouter from './controllers/blogs.js';

const app = express();

app.use(cors());
app.use(express.json());
// morgan.token('body', (req) => {
//     return JSON.stringify(req.body);
// });
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

mongoose
    .connect(utils.config.MONGODB_URI)
    .then(() => {
        utils.logger.info('Connected to MongoDB');
    })
    .catch((err) => {
        utils.logger.error('Error connecting to MongodB:', err.message);
    });

app.use(utils.middleware.requestLogger);

app.use('/api/blogs', blogsRouter);

app.use(utils.middleware.requestLogger);
app.use(utils.middleware.unknownEndpoint);
app.use(utils.middleware.errorHandler);

export default app;
