import jwt from 'jsonwebtoken';
import config  from '../config';
const { JWT } = config;



function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT.SECRET, (err, payload) => {
      if (err) {
        reject({
          status: 401,
          message: err.message,
          statusCode: 'E00008'
        });
      }
      resolve(payload);
      })
    })
}

function generateAccessToken(payload) {
  return new Promise((resolve,reject) => {
    jwt.sign(payload, JWT.SECRET, {
      expiresIn: JWT.SECRET_TOKENTIME
    },(err,token) => {
      if(err){
        reject(err);
      }
      resolve(token);
    })
  })
   
}



async function generateToken({ userId, accountId, role, accountType }) {
  try {
    let payload = {
      userId: userId,
      accountId: accountId,
      role: role,
      accountType: accountType
    };
    let token = await generateAccessToken(payload);
    return {
      token
    };
  } catch (err) {
      return Promise.reject(err);
  }
  
}



module.exports = {
  generateToken,
  generateAccessToken,
  generateRefreshToken,
  verifyToken
};
