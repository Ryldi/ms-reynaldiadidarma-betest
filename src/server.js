const moongose = require("mongoose");
const express = require("dotenv").config();
const app = require("./index");

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/db_reynaldiadidarma_betest";


