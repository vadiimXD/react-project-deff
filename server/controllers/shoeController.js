const router = require("express").Router();

const shoeService = require("../services/shoeService");



router.post("/create", async (req, res) => {
    console.log(req.body)
    try {
        await shoeService.createOffer(req.body)
        res.send({ created: true })
    } catch (error) {
        res.send(false)
    }
})


router.get("/catalog", async (req, res) => {
    try {
        const shoes = await shoeService.getAllShoes()
        res.json(shoes)
    } catch (error) {
        res.send(false)
    }
})

router.get("/details/:shoeId", async (req, res) => {
    try {
        const product = await shoeService.getOneProduct(req.params.shoeId);
        res.json(product)
    } catch (error) {
        res.send(false)
    }
})

router.post("/buy", async (req, res) => {
    try {
        await phonesService.buyProduct(req.body.phoneId, req.body.userId)
        res.send(true)
    } catch (error) {
        res.send(false)
    }
})

router.post("/edit", async (req, res) => {
    try {
        await shoeService.updateProduct(req.body._id, req.body)
        res.send({ edited: true })
    } catch (error) {
        res.send(false)
    }
})

router.delete("/delete/:phoneId", async (req, res) => {
    try {
        await phonesService.deleteProduct(req.params.phoneId)
        res.send({ deleted: true })
    } catch (error) {
        res.send(false)
    }
})

router.post("/search", async (req, res) => {

    try {
        const phones = await phonesService.searchProducts(req.body.name, req.body.type)
        console.log(phones)
        res.json(phones)
    } catch (error) {
        res.send(false)
    }
})




module.exports = router