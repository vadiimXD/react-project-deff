const router = require("express").Router();
const authService = require("../services/authService")


router.post("/register", async (req, res) => {
    console.log(req.body)
    try {
        const body = await authService.registerUser(req.body.email, req.body.password, req.body)
        res.send(body)
    } catch (error) {
        res.send(error.message)
    }
})

router.post("/login", async (req, res) => {
    try {
        const body = await authService.loginUser(req.body);
        res.send(body)
    } catch (error) {
        res.send(error.message)

    }
})

router.get("/user/:userId", async (req, res) => {
    try {
        const user = await authService.getUserById(req.params.userId).populate("addedShoes")
        res.json(user)
    } catch (error) {
        res.send(error.message)

    }
})

router.post("/edit/user", async (req, res) => {
    console.log(req.body)
    try {
        await authService.updateProfile(req.body.id, { profileImg: req.body.profileImg })
        res.send({ Edited: true })
    } catch (error) {
        res.send(error.message)

    }
})


router.post("/add/cart", async (req, res) => {
    try {
        await authService.addToCart(req.body.userId, req.body.phoneId)
        res.send({ Added: true })
    } catch (error) {
        res.send(error.message)

    }
})

router.post("/remove/cart", async (req, res) => {
    try {
        await authService.removeFromCart(req.body.userId, req.body.phoneId)
        res.send({ Removed: true })
    } catch (error) {
        res.send(error.message)

    }
})
module.exports = router