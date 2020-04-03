import bcrypt from 'bcryptjs';

async function createPassword(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (err) {
        return Promise.reject(err);
    }
    
}

async function verifyPassword(input, password) {
    try {
        return await bcrypt.compare(input, password);
    } catch (err) {
        return Promise.reject(err);
    }
    
}



export {
    createPassword,
    verifyPassword
}