var app = require('./app');
const PORT = process.env.PORT || 5000;
const db = require('./models');

db.sequelize.sync().then(function () {
    app.listen(PORT, () => {
        console.log(`app is running on ${PORT}`);
    })
})
