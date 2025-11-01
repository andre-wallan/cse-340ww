// models/account-model.js
const pool = require("./db.js");

async function findUserByEmail(email) {
  const result = await pool.query("SELECT * FROM account WHERE email = $1", [email]);
  return result.rows[0];
}

module.exports = { findUserByEmail };
