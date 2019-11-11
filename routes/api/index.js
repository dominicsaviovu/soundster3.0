const router = require("express").Router();
const musicRoutes = require("./music");
// music routes
router.use("/music", musicRoutes);
module.exports = router;