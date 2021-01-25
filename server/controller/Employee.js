var Leave = require('../models/leave.model');
var Attendance = require('../models/attendance.model');
var User = require('../models/user.model');
var Project = require('../models/project.model');
const {validationResult} = require('express-validator');


/** function for leave-request */

exports.applyForLeave = async(req,res) => {

    const {
        title,
        type,
        startDate,
        endDate,
        period,
        reason,
        appliedDate,
        leaveStatus
    } = req.body;


    /** Get errors from req */
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({errors : errors.array()});
    }


    try {

        let leave = await Leave.findOne({title});

        if(leave) {
            return res.send('Leave title already exists');
        }
        
        /** Create new leave request */
        const applicantID = req.user.id;

       
        const newLeave = new Leave({
            applicantID,
            title,
            type,
            startDate,
            endDate,
            period,
            reason,
            appliedDate,
            leaveStatus
        });

        await newLeave.save();

        if(!newLeave) {
            return res.status(500).send('Leave failed to save');
        }
        else {
            return res.status(200).json({newLeave});
        }

    } catch (err) {
        console.log(`leave req err : ${err}`);
        return res.status(500).send('Server err');
    }
}

/** function to mark leave  for employee */

exports.markLeaves = async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({errors : errors.array()});
    }
    try {
        
        await Attendance.find({
            employeeID : req.user.id,
            month : new Date().getMonth()+1,
            date : new Date().getDate(),
            year : new Date().getFullYear()
        },(err,docs) => {

            var found = 0;

            if(docs.length> 0) {
                found = 1;
            }
            else {

                var newAttendance = new Attendance();
                newAttendance.employeeID = req.user.id;
                newAttendance.year = new Date().getFullYear();
                newAttendance.month = new Date().getMonth() + 1;
                newAttendance.date = new Date().getDate() +1;
                newAttendance.present = 1;

                newAttendance.save(function saveAttendace(err) {
                    if(err) {
                        return res.status(500).json({err : 'Failed to mark attendance'});
                    }
                    
                    return res.status(200).json({newAttendance});
                })

            }
        });



    } catch (err) {
        
        console.log(`mark leave err : ${err}`);
        return res.status(500).send('Server err');
    }
}

/** 
 * @Description : 
 * Can view his/her profile
 */
exports.viewProfile = async(req,res) => {

    try {

    
        await User.findById({_id : req.user.id},(err,result) => {

            if(err) {
                return res.json({hasFind : false,err});
            }
            else {
                return res.status(200).json({result});
            }
        }).select('-password');

    } catch (err) {
        console.log(`view profil err : ${err}`);
        return res.status(500).send('Server err');
    }

}


/** 
 * @Description :
 * Can view all projects asigned to employee
 */
exports.viewAllProjects = async(req,res) => {

    try {

        var projects = [];

        await Project.findById({_id : req.user.id})
        .sort({_id : -1}) //sorting in ascending order
        .exec(function(err,result) {

            if(!err) {
                var has_project = false;

                if(result.length > 0) {
                    has_project = true;
                }

            // render all project
            for(var i =0; i < result.length;i++) {
                projects.push(result[i]);
            }
            return res.status(200).json({projects});

            }

            if(result == null){
                return res.status(500).send('No projects found..');
            }
    

        });
        

    } catch (err) {
        console.log(`get projects err : ${err}`);
        return res.status(500).send('Server error');
    }

}

/**
 * @description : 
 *  -> Update profile for current logged in employee
 *  -> Skills,contactNumber
 */

 exports.updateProfile =  async(req,res) => {

    try {

        let skills = [];
        
        await User.findOne({_id : req.user.id},
            {
                "contactNumber" : req.body.contactNumber,
                "skills" : req.body.skills
            })
            .exec((err,docs) => {

                
            })
        
    } catch (err) {
        console.log(`Profile update err : ${err}`);
        return res.status(500).send('Server err');
    }


 }