'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async all() {
        const {ctx} = this;
        const users = await ctx.service.user.all();
        ctx.body = users;
    }

    async info() {
        const {ctx} = this;
        const uid = ctx.params.id;
        const userInfo = await ctx.service.user.find(uid);
        ctx.body = userInfo;
    }

}

module.exports = UserController;