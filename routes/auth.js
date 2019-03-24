const express = require('express');
const {check,body} = require('express-validator/check');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login',
    [
        body('email')
            .isEmail()
            .normalizeEmail()
            .withMessage('Please Enter Valid Email'),
        body('password','Password Length is not Valid')
            .isLength({min: 6})
            .isAlphanumeric()
            .trim()
    ],
    authController.postLogin);

router.post('/signup',
    [
        check('email')
            .isEmail()
            .withMessage('Please enter a valid email')
            .custom((value, {req}) => {
                // if(value === 'munafhajirpro@gmail.com'){
                //     throw new Error('This email address is forbidden');
                // }
                // return true;
                return User.findOne({ email: value })
                    .then(userDoc => {
                    if (userDoc) {
                        return Promise.reject(
                            'Email already exist, Please pickup another email'
                        );
                    }
                });
            })
            .normalizeEmail(),
        body('password',
                'Please enter only text & numbers. Length should atleast be 6')
        .isLength({min: 6})
        .isAlphanumeric()
        .trim(),
        body('confirmPassword').trim().custom((value, {req}) => {
            if(value !== req.body.password) {
                throw new Error ('Password Dont Match');
            }
            return true;
        }),
    ],
    authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;