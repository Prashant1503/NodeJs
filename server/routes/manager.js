const express = require('express');
const router = express.Router();


const managerController = require('../controller/Manager');
const authMiddleware = require('../middlewares/authMiddleware');
const {validate} = require('../middlewares/inputMiddleware');
const { isAccountManager,isProjectManager } = require('../middlewares/roleMiddleware');

/**
 * @Route : /set-salary/emp/empId
 * @Desc : 
 *  -> If salary is already saved.
 *  -> Then not update it.
 *  -> If not set,set the salary of employee using empId
 */

 router.post('/set-salary/:empId',authMiddleware,isAccountManager,managerController.setSalaryForEmployee);


 /**
  * @Route : /update/salary/:empId
  * @Desc : 
  *   -> Update salary for employee
  * @Access : Protected
  */

  router.post('/update/bonus&reason/:salId',authMiddleware,isAccountManager,managerController.updateSalaryStructure);


  /**
   * @Route : /increment-salary/:salId
   * @Desc : Updating salary using current_salary + amountIncrement
   * @Access : Protected
   */

   router.post('/increment-salary/:id',authMiddleware,isAccountManager,managerController.incrementSalary);


   /**
    * @Route : /generate-paySlip:/empId
    * @Desc : generate paySlip for particular id
    * @Access : Protected
    */

router.post('/generate-pay-slip/:empId',
    validate('generate-paySlip'),
    authMiddleware,
    isAccountManager,
    managerController.generatePaySlip);

/*************************************************************************************************************/

                   /** Project - Manager route */
/**
 * @Route : /allocate-project/employee/:empId
 * @Desc : allocate project to employee based on id
 * @Access : Protected
 */

 router.post('/allot-project/employee/:empId',
        validate('allot-project'),
        authMiddleware,
        isProjectManager,
 managerController.allotProjectToEmployee);
 

 /**
  * @Route : /get/project-list/:projectId
  * @access : retrive all project using project id
  * @Access : Protected
  *  : project_manager
  */
  router.get('/get/project/:projectId',authMiddleware,isProjectManager,managerController.getAllocatedProjects);

  
// module.export
module.exports = router;