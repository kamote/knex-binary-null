module.exports = {
  client: 'mssql',
  connection: {
    host : 'localhost',
    user : 'sa',
    password : 'yourStrong(!)Password',
    database : 'test_db'
  },
  migrations: {
    tableName: 'migrations'
  }
};