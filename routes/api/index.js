const router = require("express").Router();
const globalRoutes = require("./global");
const natRoutes = require("./national");
const localRoutes = require("./local")

// routes
router.use("/global", globalRoutes);

// router.use("/national", natRoutes);

// router.use("/local", localRoutes)

module.exports = router;