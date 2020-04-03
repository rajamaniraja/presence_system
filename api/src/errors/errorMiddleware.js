import { getError } from '../utilities'
import ERRORS from '../extras/CUSTOM_ERRORS'

export default async (err, req, res, next) => {
    console.log('Error Middleware called', err.message);
    res.status(err.status || 500).send(getError(ERRORS[err.statusCode || 'E00001']));
}