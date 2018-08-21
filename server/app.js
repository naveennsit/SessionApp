const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./models');

const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
var SequelizeStore = require('connect-session-sequelize')(session.Store);



const app = express();



// Middleware
app.use(express.static(path.join(__dirname,'../client')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());

app.use(cookieParser());
const options = {
    "username": "sql12252060",
    "password": "ZhgGIqD133",
    "database": "sql12252060",
    "host": "sql12.freemysqlhosting.net",
}
app.use(session({
    secret: 'sdfsdfsdfsd',
    resave: false,
    store: new SequelizeStore({
        db: db.sequelize
    }),
    saveUninitialized: false,

}));

app.use(passport.initialize());
app.use(passport.session());

//Routes


app.use('/users', require('./routes/user.route'))

app.get('/',(req,res)=>{

  res.sendFile(path.join(__dirname,'../client/index.html'));
})

module.exports = app;