const User = require('../models/userSchema');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
    
    User.findOne({phone: req.body.phone})
    .then(user => {
        if(user) {
            res.json({
                message: "This phone number is already registered"
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hashedPass) => {

                if(err) {
                    res.json({
                        error: err
                    });
                }
        
                let user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    password: hashedPass
                });
            
                user.save().then(user => {
                    res.json({
                        message: "User added successfully!"
                    });
                }).catch(error => {
                    res.json({
                        message: "An error occured!"
                    });
                });
            });
        }
    });
}

const login = (req, res, next) => {

    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email: email})
    .then(user => {

        if(user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) {
                    res.json({
                        error: err
                    });
                }
                if(result) {
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'});
                    res.json({
                        message: "Login Successfully!",
                        token: token
                    });
                }else {
                    res.json({
                        message: "Password does not matched***"
                    });
                }
            });
        }else {
            res.json({
                message: "No user found!"
            });
        }
    });
}

module.exports = {
    register, login
}