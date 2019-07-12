const express= require('express');

const router = express.Router();
const LoginController = require('../controller/loginController')
router.post('/api/login/register',LoginController.register);
router.post('/api/login',LoginController.login);
router.get('/api/islogin',(req,res)=>{
    res.json(req.session)
})
router.get('/api/logout',LoginController.logout);
module.exports=router;