'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUser() {
    const user = await this.app.mysql.query('select * from users');
    console.log(user, 'user');
    return user;
  }
  async addUser(data) {
    console.log(data, 'data');
    const result = await this.app.mysql.insert('users', {
      ...data,
    });
    return result;
  }
}

module.exports = UserService;
