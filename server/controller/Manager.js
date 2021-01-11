const Salary = require('../models/salary.model');
const User = require('../models/user.model');
const PaySlip = require('../models/payslip.model');
const Project = require('../models/project.model');


/** Function for setting salary of employee using employeeId */
exports.setSalaryForEmployee = async(req,res) => {


    try {

        /** 
         * Finding salary through req.body.salary
         * If salary exists,return msg
         * If not exists,create it in salarySchema
         */
        const sal = await Salary.findOne({"salary" : req.body.salary});

        if(sal) {
            return res.status(500).json({hasCreated : false,err : 'Salary already exists'});
        }

        /** Create new salary in salarySchema */
        let newSalary = new Salary({
            accountManagerID : req.user.id,
            employeeID : req.params.empId,
            salary : req.body.salary
        });
        
        await newSalary.save();

        if(!newSalary) {
            return res.status(500).json({err : 'Failed to create salary.'});
        }
        else {
            return res.status(200).json({msg : 'Successfully saved',newSalary});
        }
           
     } catch (err) {
        console.log(`salary update err : ${err}`);
        return res.status(500).send('Server err');
    }
    


  

  
}


/**  */

/**
 * @Function : 
 *  -> Update salary + bonus + reason using salaryId 
 */
exports.updateSalaryStructure = async(req,res)  => {

    try {

        /** 
         * -> Update bonus + reason using salary id
         */

         
        await Salary.findByIdAndUpdate({_id : req.params.salId},
            {
                "bonus" : req.body.bonus,
                "reasonForBonus" : req.body.reasonForBonus
        },{new : true})
        .exec((err,updated) => {

            if(err) {
                return res.status(500).json({hasUpdated : false,err : 'Failed to update salary'});
            }
            else {
                return res.status(200).json({hasUpdated : true,updated});
            }
        });
        

    } catch (err) {
        console.log(`update sal err : ${err}`);
        return res.status(500).send('Server err');
    }

}


/** 
 * @function :  Increment salary using salary Id
 */
 exports.incrementSalary = async (req,res) => {

    try {

        await Salary.findOne({_id : req.params.id},function (err,docs) {

            if(err) {
                return res.status(500).send('Invalid salary id');
            }
        
            /** Update salary */
            docs.salary = Number(req.body.current_salary) + Number (req.body.amountIncrement);

            docs.save((err,updated) => {

                if(err) {
                    console.log(`Sal increment err : ${err}`);
                    return res.status(500).json({hasUpdated : false,err : 'Failed to increment salary'});
                }
                
                return res.status(200).json({msg : 'Salary incremented success',updated});
            });

        });
        
    } catch (err) {
        console.log(`Server er : ${err}`);
        return res.status(500).send('Server err');
    
    }
 }


 /** @function : Generate paySlip for employee */
exports.generatePaySlip = async(req,res) => {

    try {

        /** Find user by id  */
        User.findById({_id : req.params.empId},function getUser (err,docs) {

            if(err) {
                console.log(`user not found err : ${err}`);
            }

            PaySlip.find({employeeID : req.params.empId},function getPaySlip(err,docs) {

                if(err) {
                    return res.send(err);
                }

                var project = 0;
                var has_PaySlip = 0;

                /** If paySlip found,set has_PaySlip to 1 i.e(We had already generate paySlip) */
                if(docs.length > 0) {
                    has_PaySlip = 1;
                    pay_slip = docs[0];

                    return res.status(402).json({err : 'PaySlip has already been generated..'});
                }
                else {

                    /** Create new salary slip for employee  */
                    var newPs = new PaySlip({

                        accountManagerID : req.user.id,
                        employeeID : req.params.empId,
                        bankName : req.body.bankName,
                        branchAddress : req.body.branchAddress,
                        basicPay : req.body.basicPay,
                        overtime : req.body.overtime,
                        conveyanceAllowance : req.body.conveyanceAllowance
                    });
        
                    newPs.save(function savePaySlip (err,result) {

                        if(err) {
                            console.log(`PaySlip err : ${er}`);
                            return res.status(500).json({hasCreated : false,msg : 'Failed to create salary slip'});
                        }
                    
                        return res.status(200).json({msg : 'PaySlip generated successfully',result});
                    });

                }
            })
        })
        
    } catch (err) {
        console.log(`gen paySlip err : ${err}`);
        return res.status(500).send('Server err');
    }



}

/*************************************END******************************************************************** */
 
//******************************Project Manager ***************************************************************

/** @function : allocate project to particular employeed using employeeId */
exports.allotProjectToEmployee = async(req,res) => {

    try {
        
        User.findById({_id : req.params.empId},function getUser (err,docs) {

            if(err) {
                console.log(`user not found err : ${err}`);
            }

            Project.find({employeeID : req.params.empId},function getProject(err,docs) {

                if(err) {
                    return res.send(err);
                }

                var project = 0;
                var has_project = 0;

                /** If project found,set has_project to 1 i.e(Already alloted a project) */
                if(docs.length > 0) {
                    has_project = 1;
                    project = docs[0];

                    return res.status(402).json({err : 'Project already alloted to employee'});
                }
                else {

                    /** Create new salary slip for employee  */
                    var newProject = new Project({

                        employeeID : req.params.empId,
                        title : req.body.title,
                        type : req.body.type,
                        status : req.body.status,
                        description : req.body.description,
                        startDate : req.body.startDate,
                        endDate : req.body.endDate
                    });
        
                    newProject.save(function savePaySlip (err,result) {

                        if(err) {
                            console.log(`Project allot err : ${er}`);
                            return res.status(500).json({hasAlloted : false,msg : 'Failed to allot project to emp'});
                        }
                    
                        return res.status(200).json({msg : 'Project alloted success',result});
                    });

                }
            })
        })


    } catch (err) {
        
        console.log(`project allot err : ${err}`);
        return res.status(500).send('Server err');
    }
}

/** 
  * @function : Get all allocated projects
  */

 exports.getAllocatedProjects = async (req,res) => {

    try {

        await Project.findById({_id : req.params.projectId},function(err,project) {

            if(err) {
                return res.status(402).json({err : 'Invalid projectId'});
            }
            return res.status(200).json({project});
        });

        
    } catch (err) {
        
        console.log(`Get allot-project err : ${err}`);
        return res.status(500).send("Server err");
    }
  }