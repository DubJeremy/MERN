const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');
const userCtrl = require('../controllers/user.controller');


router.post('/signUp', authCtrl.signUp);

router.get("/:id", userCtrl.userInfo);
router.put("/:id", userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);
// router.post('/login', userCtrl.login);

module.exports = router;