const { authJwt } = require("../middleware");
const controller = require("../controllers/userController");
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

  router.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  router.get(
    "/api/test/sup",
    [authJwt.verifyToken, authJwt.isSupervisior],
    controller.supervisiorBoard
  );

  router.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};

module.exports = router;