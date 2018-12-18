'use strict';

const Service = require('egg').Service;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

class UserService extends Service {

    async all() {
        //const users = await this.app.mysql.select('sys_user');
        const {ctx} = this;
        const query = {limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset)};
        const users = await ctx.model.User.findAll();
        return users;
    }


    async find(uid) {
        const user = {id: uid};
        return user;
    }
}

module.exports = UserService;