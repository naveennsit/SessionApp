const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const db = require('./models')


//Local strategy
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {

    const user = await db.User.findOne({where: {email: email}});
    if (!user) {
        return done(null, false,{message:"No user exit"});
    }
    const isMatch = await bcrypt.compare(password, user.dataValues.password);
    console.log(isMatch, 'isMatch');
    if (!isMatch) {
        return done(null, false);
    }

    // Otherwise, return the user
    done(null, user);

}));

passport.serializeUser(function(id, done) {
    console.log('ddd');
//    console.log(user);
    done(null, id);
});

passport.deserializeUser(function(id, done) {
    console.log('deserializeUser');
    done(null, id);
    // db.User.findById(id, function (err, user) {
    //     done(err, user);
    // });
});