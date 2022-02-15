const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');
const userCtrl = require('../controllers/user.controller');


router.post('/signup', authCtrl.signUp);
router.post("/login", authCtrl.signIn);
// router.get("/logout", authController.logout);

router.get("/:id", userCtrl.userInfo);
router.put("/:id", userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);

// router.patch("/addtowishlist/:id", userCtrl.wishList);
// router.patch("/removetowishlist/:id", userCtrl.removeFromWishlist);

module.exports = router;