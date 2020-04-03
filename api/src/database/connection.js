import mongoose from  'mongoose';
const { createConnection } = mongoose;
import config  from '../config';
const { DBHOST } = config;
let connection = {};

const clientOption = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    useNewUrlParser: true,
    autoIndex: false,
    useUnifiedTopology: true
  };
const initialize = () => {
    connection = createConnection(DBHOST,clientOption);
    connection.on('open',() => {
     console.log('Connected to the Database host');
    })
    connection.on('error', () => {
        console.log('Mongo DB Connection Error Happend')
    })
}

const getConnection = () => {
    
    return connection;
}

export {
    getConnection,
    initialize
}


