const express= require('express');
const router = express.Router();

router.get('/api/post',(req,res,next)=>{
    res.send('heollooo~');
});

module.exports =router;