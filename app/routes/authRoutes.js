const { verifySignUp } = require("../middleware");
const controller = require("../controllers/authController");
const express = require('express');
const router = express.Router();

module.exports = function(router) {
  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.post("/api/auth/signup",
    [
      verifySignUp.checkDuplicateEmail,
      verifySignUp.checkRolesExisted
    ],
    Controllers.signup
  );

  router.post("/api/auth/signin", controller.signin);
};

module.exports = router;