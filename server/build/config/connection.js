"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || "ecommerce_db", process.env.DB_USER || "root", process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: false, // Set to true for SQL query logging
    dialectOptions: {
        decimalNumbers: true,
    },
});
// Test the connection
sequelize
    .authenticate()
    .then(() => {
    console.log("Database connection established successfully.");
})
    .catch((err) => {
    console.error("Unable to connect to the database:", err);
});
exports.default = sequelize;
