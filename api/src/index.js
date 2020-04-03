import config from './config';
import app from './app';
import errorMiddleware from './errors/errorMiddleware'
import { initialize } from './database/connection';
import setupRoute from './routes';
import log4js from 'log4js';




//Function to Initialize Database Connection
initialize();



setupRoute(app);

log4js.configure(config.LOG4JS_CONFIG);

app.use(errorMiddleware);
app.listen(3000, () => console.log('Server Listeneing'));
