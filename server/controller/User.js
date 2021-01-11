const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { validationResult } = require('express-validator');
const { isAdmin } = require('../middlewares/roleMiddleware');
require('dotenv').config();


// register user function
exports.registerUser = async (req,res) => {

    const {
        name,
        email,
        role,
        password,
        dateOfBirth,
        contactNumber,

    } = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({errors :errors.array()});
    }

    try {

        const user = await User.findOne({email});

        /**
         * If user exist return message "Already exists"
         * If not exist,create new user
         */
        if(user) {
            return res.status(422).json({msg : 'Email already in use'});
        }

        // hashing password
        let hashedPassword = await bcrypt.hashSync(password,10);

        /**Create new user */
        let newUser = new User({
            name,
            email,
            password : hashedPassword,
            role,
            dateOfBirth,
            contactNumber
        });

        if(newUser.role == 'employee') {
            return res.send('Unathorized access');
        }
        await newUser.save();

        if(newUser) {
            return res.status(200).json({hasRegistered : true,newUser});
        }
        else {
            return res.send('User registeration failed');
        }
    
        
    } catch (err) {
        console.log(`reg err :${err}`);
        return res.send('Server error');
    }

}

// login user
exports.loginUser = async (req,res) => {

    const {email,password} = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({errors : errors.array()});
    }

    try {

        /**Check user exist or not */
        const user = await User.findOne({email});

       
        if(!user) {return res.status(422).send('Email doesn\t exists')};


        /** Decrypt password */
        const hash = user.password;
        let decryptPassword = await bcrypt.compareSync(password,hash);
    
        /** Generate token */
        const token = await jwt.sign({id : user._id},process.env.jwt_secret_key,{expiresIn :'2h'});
        /** Login user */

        if(user && decryptPassword) {
            return res.status(200).json({hasLoggedIn : true,token});
        }

        else {
            return res.status(500).send('User failed to login..');
        }

    } catch (err) {
        
        console.log(`login err : ${err}`);
        return res.status(500).send('Server err');
    }

}