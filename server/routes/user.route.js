const express = require('express');
const router = express.Router();

const userController = require('../controller/User');
const inputMiddleware = require('../middlewares/inputMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

/**  
 * @Route : /register
 * @Desc : register new user
 * @Access : public
 */
router.post('/register',inputMiddleware.validate('register-user'),userController.registerUser);

/**  
 * @Route : /login
 * @Desc : login existing user
 * @Access : public
 */
router.post('/login',inputMiddleware.validate('login-user'),userController.loginUser);




// module.export
module.exports = router;