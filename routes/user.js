const express = require("express");
const router = express.Router();

const {
    getUserById,
    getUser,
    updateUser,
    userPurchaseList,
    getAllUsers,
} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

// parameter
router.param("userId", getUserById);

// routes
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.get("/user/users", isSignedIn, isAuthenticated, isAdmin, getAllUsers);

router.get(
    "/orders/user/:userId",
    isSignedIn,
    isAuthenticated,
    userPurchaseList
);

module.exports = router;
