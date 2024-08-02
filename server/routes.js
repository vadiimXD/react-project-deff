const router = require("express").Router();

const authController = require("./controllers/authController")
const shoeController = require("./controllers/shoeController")

router.use(authController)
router.use(shoeController)

module.exports = router
