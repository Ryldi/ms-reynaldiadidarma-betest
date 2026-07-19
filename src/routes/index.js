const express = require('express');
const router = express.Router();

const accountRoutes = require('./account');
const userRoutes = require('./user');

router.use('/account', accountRoutes);
router.use('/user', userRoutes);

module.exports = router;