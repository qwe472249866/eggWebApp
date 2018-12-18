'use strict';

module.exports = app => {
    const {STRING, INTEGER, DATE} = app.Sequelize;

    const User = app.model.define('sys_user', {
        id: {type: INTEGER, primaryKey: true, autoIncrement: true},
        account: STRING(45)
    });

    return User;
};