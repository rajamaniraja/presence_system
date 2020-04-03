import DocumentSession from '../database/docSession';
import { UserService } from '../services/UsersService';
import { getResponse } from '../utilities';
import ApplicationError from '../errors/customError';



const createUser = (req, res, next) => {
    try {
        const data = req.body;
    } catch (err) {
        next(err);
    }
}


const me = async (req, res, next) => {
    try {
        const session = req.session;
        const { userId, accountId } = req.user;
        const service = new UserService(session);
        const result = await service.getMe(userId, accountId);
        const responseData = {
            data: result,
            message: 'My Details'
        };
        res.send(getResponse(responseData));
    } catch (err) {
        next(err);
    }
}

export {
    me
}