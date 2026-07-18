const express = require('express');
const router = express.Router();

const AccountController = require('../controllers/accountController');

router.get('/', AccountController.list);
router.get('/inactive', AccountController.getInactive);
router.get('/:id', AccountController.detail);
router.post('/', AccountController.create);
router.put('/:id', AccountController.update);
router.delete('/:id', AccountController.remove);

module.exports = router;