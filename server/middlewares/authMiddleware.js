const jwt = require('jsonwebtoken');
require('dotenv').config();

 
// function to validate token and filter for user
const authMiddleware = async (req,res,next) => {
 
    // requesting token from client side
    let token = req.headers['x-auth-token'];
 
    if(!token) return res.status(401).send('No token provided.');
 
    try {
    
        jwt.verify(token,process.env.jwt_secret_key,(err,user) => {
            if(!err) {
               
                req.user = user;
                
                next();
            }
            else { return res.status(500).send({auth : false,err})}
 
            
        });
    } catch (err) {
 
        console.log('Token side err : ' + err);
        return res.status(500).send('Server error');
    }
 
}
 
module.exports = authMiddleware;

