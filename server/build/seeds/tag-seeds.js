"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = __importDefault(require("../models/Tag"));
const tagData = [
    {
        tag_name: "rock music",
    },
    {
        tag_name: "pop music",
    },
    {
        tag_name: "blue",
    },
    {
        tag_name: "red",
    },
    {
        tag_name: "green",
    },
    {
        tag_name: "white",
    },
    {
        tag_name: "gold",
    },
    {
        tag_name: "pop culture",
    },
];
const seedTags = () => Tag_1.default.bulkCreate(tagData);
exports.default = seedTags;
