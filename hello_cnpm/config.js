module.exports = {
  // input your custom config here
  admin: {
    'admin': 'admin@cnpmjs.org'
  },
  bindingHost: '',
  mysqlServers: [
  {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
  }
  mysqlDatabase: 'cnpmjs_test',
  database:{
    dialect: 'mysql'
  }
};
