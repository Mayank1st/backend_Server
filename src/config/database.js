const { connect } = require("mongoose");

const connectDB = async (DB_URL) => {
  try {
    connect(DB_URL);
    console.log("Database connected successfully");
  } catch (error) {}
};

module.exports = connectDB;
