const mongoose = require("mongoose");
const express = require("dotenv").config();
const app = require("./index");

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

async function start() {
  await mongoose.connect(MONGO_URI);

  app.listen(PORT, () => console.log(`Server running on port ${PORT} and MongoDB connected to ${MONGO_URI}`));
}

start().catch(err => {
  console.error('Failed to start', err);
  process.exit(1);
});
