import dotenv from 'dotenv';

dotenv.config({ path: 'local.env' });

export default {
    DBHOST: process.env.DBHOST,
    PORT: process.env.PORT,
    SITE: process.env.SITE,
    JWT: {
        SECRET: process.env.JWT_SECRET,
        SECRET_TOKENTIME: process.env.JWT_SECRET_TOKENTIME
    },
    LOG4JS_CONFIG: process.env.LOG4JS_CONFIG
};