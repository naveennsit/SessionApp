const db = require('../models');
const passport = require('passport');


const passportConfig = require('../passport')
module.exports = {
    register: async (req, res, next) => {

        try {
            const result = await db.User.create({
                email: req.body.email,
                password: req.body.password
            })

            console.log(result.id);
            req.login(result.id, function () {
                res.json({message: "Registration successfully"});

            })
        } catch (e) {
            console.log(e)
        }

    },
    login: async (req, res, next) => {
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return next(err)
            }
            if (!user) {
                return res.json({message: info.message})
            }
            res.json(user);
        })(req, res, next);

    }

}