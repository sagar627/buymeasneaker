const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getToken, processPayment } = require("../controllers/paymentBrainTree");
// get Token
router.get("/payment/gettoken:userId", isSignedIn, isAuthenticated, getToken);

// process Payment
router.post(
  "/payment/braintree/:userId",
  isSignedIn,
  isAuthenticated,
  processPayment
);
module.exports = router;
