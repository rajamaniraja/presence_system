import { getConnection } from './connection';





//Base Session Object

class BaseSession {
    constructor(user) {
        this.user = user;
        this.connection = getConnection();
    }

    setUser(user) {
        this.user = user;
    }

    getUser() {
       return this.user
    }

    getNow() {
        return new Date();
    }
}



class DatabaseSession extends BaseSession {
    constructor(database, user) {
        super(user);
        this.database = this.connection.useDb(database);
    }

    _getModel(modelId) {
        return this.database.model(modelId);
    }

    getModel(modelId) {
        return this.database.model(modelId);
    }
}


export default DatabaseSession;