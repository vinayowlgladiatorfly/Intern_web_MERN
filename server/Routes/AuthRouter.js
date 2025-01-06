const router = require('express').Router();
const { signupValidation,LoginValidation } = require('../Middlewares/AuthValidation')
const { signup,login } = require('../Controllers/AuthController')

router.post('/login',LoginValidation,login);
router.post('/signup', signupValidation, signup);

module.exports = router;