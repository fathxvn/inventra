const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "ctrl1404",
  host: "localhost",
  port: 5432,
  database: "inventra_db",
});

module.exports = pool;