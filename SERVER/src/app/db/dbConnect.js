const mySql = require("mysql2");
const dbConfig = require("../../configs/configs");

const connectSql = mySql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

connectSql.connect(function (err) {
  if (err) throw err;
  console.log("Đã kết nối được DATABASE");
});
module.exports = connectSql;
