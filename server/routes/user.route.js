const express = require('express');
const router = require('express-promise-router')();


const controller = require('../controllers/user.controller');


router.route('/register',)
    .post(controller.register)

router.route('/login',)
    .post(controller.login)
router.route('/abc',)
    .get((req,res)=>{
        console.log(req.isAuthenticated());
        console.log(req.user);
        res.send('jjj')
    })

router.route('/logout',)
    .get((req,res)=>{
        req.logout();
        req.session.destroy();
        console.log(req.isAuthenticated());
        console.log(req.user);
        res.send('logout')

    })


module.exports = router;

