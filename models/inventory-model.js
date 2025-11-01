// models/inventory-model.js
const pool = require("./db.js");

// Get all vehicles
async function getAllVehicles() {
  const result = await pool.query("SELECT * FROM inventory ORDER BY make");
  return result.rows;
}

// Get vehicle by ID
async function getVehicleById(id) {
  const result = await pool.query("SELECT * FROM inventory WHERE inv_id = $1", [id]);
  return result.rows[0];
}

// Add a new vehicle
async function addVehicle(make, model, year, price) {
  const result = await pool.query(
    "INSERT INTO inventory (make, model, year, price) VALUES ($1, $2, $3, $4) RETURNING *",
    [make, model, year, price]
  );
  return result.rows[0];
}

module.exports = { getAllVehicles, getVehicleById, addVehicle };
