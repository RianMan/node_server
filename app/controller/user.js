'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUser() {
    const { ctx } = this;
    const content = ctx.service.user.getUser();
    ctx.body = content;
  }
  async addUser() {
    const { body } = this.ctx.request;
    const content = this.ctx.service.user.addUser(body);
    this.ctx.body = content;
  }
}

module.exports = UserController;
