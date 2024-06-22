import logger from './logger.js';

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' });
    } else if (err.name === 'ValidationError') {
        return res.status(400).send({ error: err.message });
    }

    next(err);
};

const requestLogger = (req, res, next) => {
    logger.info('Method:', req.method);
    logger.info('Path:  ', req.path);
    logger.info('Body:  ', req.body);
    logger.info('---');
    next();
};

const middleware = {
    unknownEndpoint,
    errorHandler,
    requestLogger,
};

export default middleware;
