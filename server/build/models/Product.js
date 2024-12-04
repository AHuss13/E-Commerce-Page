"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import important parts of sequelize library
const sequelize_1 = require("sequelize");
// import our database connection from config
const connection_1 = __importDefault(require("../config/connection"));
// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends sequelize_1.Model {
}
// set up fields and rules for Product model
Product.init({
    // define columns
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    product_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
        validate: { isDecimal: true },
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: { isNumeric: true },
    },
    category_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "category",
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
});
exports.default = Product;
