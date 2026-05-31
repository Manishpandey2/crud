module.exports = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  port: process.env.DBPORT,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000,
  },
};
