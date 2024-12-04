"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../config/connection"));
class ProductTag extends sequelize_1.Model {
}
ProductTag.init({
    // define columns
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    product_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "product",
            key: "id",
        },
    },
    tag_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "tag",
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
});
exports.default = ProductTag;
