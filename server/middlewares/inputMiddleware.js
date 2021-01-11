const {body} = require('express-validator');

exports.validate = (method) => {

    switch(method) {

        case 'register-user' : {
            return [
                body('name','name is required').not().isEmpty(),
                body('email','email is required').not().isEmpty().isEmail(),
                body('role','role is required').not().isEmpty(),
                body('password','password is required').not().isEmpty().isLength({min : 6}),
                body('dateOfBirth','dateOfBirth is required').not().isEmpty().isDate(),
                body('contactNumber','contactNumber is required').not().isEmpty().isLength({min : 10,max : 10}),
            ]
        }

        case 'login-user' : {
            return [
                body('email','email is required').not().isEmpty().isEmail(),
                body('password','password is required').not().isEmpty().isLength({min : 6}),
                
            ]
        }

        case 'leave-request' : {
            return [
                body('title','title is required').not().isEmpty(),
                body('type','type is required').not().isEmpty(),
                body('startDate','startDate is required').not().isEmpty().isDate(),
                body('endDate','endDate is required').not().isEmpty().isDate(),
                body('period','period is required').not().isEmpty().isNumeric(),
                body('reason','reason is required').not().isEmpty(),
                body('appliedDate','appliedDate is required').not().isEmpty().isDate(),
                body('leaveStatus','leaveStatus is required').not().isEmpty()
            ]
        }

        case 'create-employee' : {
            return [
                body('name','name is required').not().isEmpty(),
                body('type','type is required').not().isEmpty(),
                body('email','email is required').not().isEmpty().isEmail(),
                body('role','role is required').not().isEmpty(),
                body('password','password is required').not().isEmpty().isLength({min : 6}),
                body('dateOfBirth','dateOfBirth is required').not().isEmpty().isDate(),
                body('contactNumber','contactNumber is required').not().isEmpty().isLength({min : 10,max : 10}),
            ]
        }

        case 'allot-project' : {
            return [
                body('employeeID','employeeID is required').not().isEmpty(),
                body('title','title is required').not().isEmpty(),
                body('type','type is required').not().isEmpty(),
                body('status','status is required').not().isEmpty(),
                body('description','description is required').not().isEmpty(),
                body('startDate','startDate is required').not().isEmpty().isDate(),
                body('endDate','endDate is required').not().isEmpty().isDate(),
                
            ]
        }

        /** Generate pay-slip */
        case 'generate-paySlip' : {
            return [
                body('accountManagerID','accountManagerID is required').not().isEmpty(),
                body('employeeID','employeeID is required').not().isEmpty(),
                body('bankName','type is required').not().isEmpty(),
                body('branchAddress','branchAddress is required').not().isEmpty(),
                body('basicPay','basicPay is required').not().isEmpty().isNumeric(),
                body('overtime','overtime is required').not().isEmpty().isNumeric(),
                body('conveyanceAllowance','conveyanceAllowance is required').not().isEmpty().isNumeric(),
                
            ]
        }
        
       
    }
}