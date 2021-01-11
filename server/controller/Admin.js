const Leave = require('../models/leave.model');
const User = require('../models/user.model');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');


/** function to create new employee */
exports.createEmployee = async(req,res) => {

    const {name,email,role,password,dateOfBirth,contactNumber} = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({errors : errors.array()});
    }

    try {

        /** Find employee by email and name */
        let employee = await User.findOne({email});

        if(employee) {
            return res.status(500).send('Email or name is already in use..');
        }

    /** Bcrypt password in hash format */
        const hashedPwd = await bcrypt.hash(password,10);

        /** save new employee into database */
        const newEmp = new User({

            name,
            role,
            email,
            password : hashedPwd,
            dateOfBirth,
            contactNumber
        });

        await newEmp.save();

        if(!newEmp) {
            return res.send('Employee failed to save..');
        }
        else {
            return res.status(200).json({newEmp});
        }
        
    } catch (err) {
        console.log(`create emp err : ${err}`);
        return res.status(500).send('Server error');
    }
}


/**
 * @Description 
 * Sort the list of employees in User Schema
 * Latest record shown first
 * And displayed to admin
 */
exports.viewAllEmployee = async(req,res) => {

    var users = [];

    try {

        await User.find(
            {$or : [
                {role : 'employee'},
                {role : 'project-manager'},
                {type : 'account-manager'}]})
                .sort({_id : -1})
                .exec((err,result) => {

                    if(!err) {
                        for(var i =0;i < result.length;i++) {
                            users.push(result[i]);
                        }
                        return res.status(200).json({users});
                    }
                    else {
                        return res.json({hasFetched : false,msg : 'Failed to get users'});
                    }

                });
        
    } catch (err) {
        console.log(`view all emp err : ${err}`);
        return res.status(500).send(err);
    }

}

/**
 * @Description : 
 * Display all request leave from employee
 */

 exports.getLeaveApplication = async(req,res) => {

    try {

        await Leave.find({}).
        sort({_id : -1})
        .exec((err,leaves) => {

            if(err){
                return res.json({hasFetched : false,err});
            }

            else {
                return res.status(200).json({leaves});
            }
        });

        
    } catch (err) {
        console.log(`get leave application err : ${err}`);
        return res.status(500).send('Server err');
        
    }

 }


 /**
  * @Description : 
  * Get leaveId using req.paramters,
  * and update leave status i.e (Pending or approved) for particular user
  */

  exports.updateLeaveStatus = async (req,res) => {

    const leaveStatus = req.body.leaveStatus;

   try {

       await Leave.findByIdAndUpdate({_id : req.params.LeaveId},
        {"leaveStatus" : leaveStatus})
        .exec((err,docs) => {

            if(err) return res.json({hasUpdated : false,err});
            return res.status(200).json({docs});
        });
       
      
   } catch (err) {
       console.log(`leave update err : ${err}`);
       return res.status(500).send('Server err');
   }

  }

