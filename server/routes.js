const router = require("express").Router();

const authController = require("./controllers/authController")
const sneakersController = require("./controllers/sneakersController")

router.use(authController)
router.use(sneakersController)

module.exports = router
