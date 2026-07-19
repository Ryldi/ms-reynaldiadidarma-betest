const express = require('express');
const router = express.Router();

const accountRoutes = require('./account');
const userRoutes = require('./user');

const auth = require('../utils/auth');

router.post('/auth/token', require('../controllers/authController').generateToken);

router.use(auth.verifyJWT);

router.use('/account', accountRoutes);
router.use('/user', userRoutes);

module.exports = router;