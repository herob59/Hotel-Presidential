const { createError } = require('../utils/error');
const jwt = require('jsonwebtoken');
// const config = process.env;

exports.verifyToken =(req, res, next) => {
    const token = req.headers.AuthToken;
    if(!token){
        return next(createError(401, " You are not Authenticated"))
    }

    jwt.verify(token, process.env.JWT, (err,user) => {
        if(err) return next(createError(403, "token is not valid"));

        req.user = user;
        next();
    });
}
    
    exports.verifyUser = (req, res, next) => {
        verifyToken(req,res,()=>{
           
            if(req.user.id === (req.params.id || req.user.isAdmin)){
                next();
            }else{
                return next(createError(403, "You are not Authorized"));
            }
        });
    };

   exports.verifyAdmin = (req, res, next) => {
        verifyToken(req,res,()=>{
           
            if(req.user.isAdmin){
                next();
            }else{
                return next(createError(403, "You are not Authorized"));
            }
        });
    };


//exports.default ={verifyToken,verifyUser}
// module.exports = verifyToken;
//export default {verifyToken,verifyUser}
 //module.exports={verifyToken,verifyUser}