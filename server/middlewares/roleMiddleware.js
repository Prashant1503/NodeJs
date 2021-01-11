const User = require('../models/user.model');

 //Have also tried Schema.Types.ObjectId, mongoose.ObjectId


/**
 * Function to check admin role
 *  If role is admin return next()
 * If role not admin return msg
 */
exports.isAdmin = async(req,res,next) => {


    try {
        
        const id = req.user.id;

        if(!id) {
            return res.send('No user logged in..');
        }

        let user = await User.findById({_id : id});

        if(user.role == 'admin') {
            next();
        }

        else {
            return res.status(402).send('Unathorized access!');
        }

    } catch (err) {
        console.log(`admn middleware err : ${er}`);
        return res.status(500).send('Server err');
    }

   
}

/**
 * Function to check admin role
 *  If role is admin return next()
 * If role not admin return msg
 */
exports.isEmployee = async(req,res,next) => {

    try {


        const id = req.user.id;
        let user = await User.findById({_id : id}).select('-password');

    
        if(user.role == 'employee') {
            next();
        }

        else {
            return res.status(402).send('Unathorized access!');
        }

    } catch (err) {
        console.log(`emp middleware err : ${err}`);
        return res.status(500).send('Server err');
    }

   
}


/**
 * Function to check manager role
 *  If role is account manager,return next()
 * If role doesn\t equals to account-manager then return err.
 */

 exports.isAccountManager = async (req,res,next) => {

    try {

        const id = req.user.id;
        let user = await User.findById({_id : id}).select('-password');

    
        if(user.role == 'account-manager') {
            next();
        }

        else {
            return res.status(402).send('Unathorized access!');
        }

    } catch (err) {
        console.log(`emp middleware err : ${err}`);
        return res.status(500).send('Server err');
    }

 }

 
 /**
  * @function : To check manager role
  *  -> If role is equal to project manager,return next(),
  *  -> If role!=project manager,return err;
  */
 exports.isProjectManager = async(req,res,next) => {

    try {

        const id = req.user.id;
        let user = await User.findById({_id : id}).select('-password');

    
        if(user.role == 'project_manager') {
            next();
        }

        else {
            return res.status(402).send('Unathorized access!');
        }

    } catch (err) {
        console.log(`manager middleware err : ${err}`);
        return res.status(500).send('Server err');
    }





 }


 