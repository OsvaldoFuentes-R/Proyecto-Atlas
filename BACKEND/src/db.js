const { Pool } = require("pg");
require("dotenv").config();

const connectionString =
  process.env.DATABASE_URL ||
  "postgres://foouser:foopass@example.com/testdb";

const pool = new Pool({ connectionString });

module.exports = { pool };

