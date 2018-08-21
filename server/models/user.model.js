const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "please enter correct email ID."
                },
                handleEmail() {
                    console.log('email element')
                }
            },

        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {}
        }
    }, {
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSalt(10);
                // Generate a password hash (salt + hash)
                // Re-assign hashed version over original, plain text password
                user.password = await bcrypt.hash(user.password, salt);
            }
        },
        timestamps: false,

    });

    return User;
};