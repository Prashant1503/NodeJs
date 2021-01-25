const express = require('express');
const empController = require('../controller/Employee');
const {validate} = require('../middlewares/inputMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const {isEmployee} = require('../middlewares/roleMiddleware');

const router = express.Router();



/**
 * @Route : /apply-for-leave
 * @Desc : applying for leave
 * @Access : protected
 */

 router.post('/apply-for-leave',validate('leave-request'),authMiddleware,isEmployee,empController.applyForLeave);

/**
 * @Route : /mark-attendence
 * @Desc : mark leave attendece by particular user
 * @Access : protected
 */
// router.post('/mark-attendence',validate('mark-attendence'),authMiddleware,isEmployee,empController.markLeaves);


/**
 * @Route : /view-profile
 * @Desc : Displays employees his/her profile
 * @Access : protected
 */

 router.get('/view-profile',authMiddleware,isEmployee,empController.viewProfile);


 /**
 * @Route : /view-all-projects
 * @Desc : View all projects for employee
 * @Access : protected
 */

router.get('/view-all-projects',authMiddleware,isEmployee,empController.viewAllProjects);


/**
 * @route : /update/profile
 * @desc : update profile i.e (Skills,contactNumber)
 * @access : protected
 */
 router.post('/update-profile',authMiddleware,isEmployee,empController.updateProfile);




// export
module.exports = router;