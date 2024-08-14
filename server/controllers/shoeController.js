const router = require("express").Router();

const shoeService = require("../services/shoeService");



router.post("/create", async (req, res) => {
    console.log(req.body)
    try {
        await shoeService.createOffer(req.body)
        res.send({ created: true })
    } catch (error) {
        res.send(error.message)

    }
})


router.get("/catalog", async (req, res) => {
    try {
        const shoes = await shoeService.getAllShoes()
        res.json(shoes)
    } catch (error) {
        res.send(error.message)

    }
})

router.get("/last", async (req, res) => {
    try {
        const shoes = await shoeService.getLastShoes()
        res.json(shoes)
    } catch (error) {
        res.send(error.message)

    }
})

router.get("/details/:shoeId", async (req, res) => {
    try {
        const product = await shoeService.getOneProduct(req.params.shoeId);
        res.json(product)
    } catch (error) {
        res.send(error.message)

    }
})


router.post("/buy", async (req, res) => {
    try {
        await phonesService.buyProduct(req.body.phoneId, req.body.userId)
        res.send(true)
    } catch (error) {
        res.send(error.message)
        
    }
})

router.post("/edit", async (req, res) => {
    try {
        await shoeService.updateProduct(req.body._id, req.body)
        res.send({ edited: true })
    } catch (error) {
        res.send(error.message)

    }
})

router.delete("/delete/:shoeId", async (req, res) => {
    try {
        await shoeService.deleteProduct(req.params.shoeId)
        res.send({ deleted: true })
    } catch (error) {
        res.send(error.message)
        
    }
})

router.post("/search", async (req, res) => {
    try {
        console.log(req.body.brand, "brand")
        const shoes = await shoeService.searchProducts(req.body.brand)
        console.log(shoes, "shoes")
        res.json(shoes)
    } catch (error) {
        res.send(error.message)
    }
})

router.post("/like", async (req, res) => {
    try {
        
        const shoe = await shoeService.addLike(req.body.userId, req.body.shoeId)
        console.log(shoe.likes)
        res.json(shoe.likes)
    } catch (error) {
        res.send(error.message)
    }
})

router.get("/likes/:shoeId", async (req, res) => {
    try {
        const shoe = await shoeService.getOneProduct(req.params.shoeId);
        res.json(shoe.likes)
    } catch (error) {
        res.send(error.message)
    }
})
module.exports = router