const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.list);
router.get('/by-account-number/:accountNumber', UserController.getByAccountNumber);
router.get('/by-registration-number/:registrationNumber', UserController.getByRegistrationNumber);
router.get('/:id', UserController.detail);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.remove);

module.exports = router;