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
        const phones = await phonesService.getAllPhones().lean().populate("owner")
        res.json(phones)
    } catch (error) {
        res.send(false)
    }
})

router.get("/details/:productId", async (req, res) => {
    try {
        const product = await phonesService.getOneProduct(req.params.productId).lean().populate("owner").populate("boughtFrom");
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
        await phonesService.updateProduct(req.body.id, req.body.body)
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