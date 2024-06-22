import app from './app.js';
import utils from './utils/index.js';
const { config, logger } = utils;

app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`);
});
