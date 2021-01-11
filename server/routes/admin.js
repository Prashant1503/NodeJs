const express = require('express');
const router = express.Router();

const adminController = require('../controller/Admin');
const inputMiddleware = require('../middlewares/inputMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const {isAdmin} = require('../middlewares/roleMiddleware');


/**
 * @Route : /add-employee
 * @Desc : create new employee
 * @Access : protected 
 */

 router.post('/add-employee',inputMiddleware.validate('create-employee'),authMiddleware,isAdmin,adminController.createEmployee);


 /**
  * @Route : /view-all-employee
  * @Desc : view all employees
  * @Access : protected
  */
 router.get('/view-all-employees',authMiddleware,isAdmin,adminController.viewAllEmployee);


  /**
  * @Route : /leave-application
  * @Desc : get all leave application
  * @Access : protected
  */
 router.get('/leave-applications',authMiddleware,isAdmin,adminController.getLeaveApplication);

 
 /**
  * @Route : /update/leave-status/:LeaveId
  * @Desc : update leave status by id 
  * @Access : protected
  */

  router.post('/update/leave-status/:LeaveId',authMiddleware,isAdmin,adminController.updateLeaveStatus);


  /**
   * @Route : /filter/
   */

module.exports = router;