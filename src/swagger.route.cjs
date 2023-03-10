const router = require("express").Router()

const swaggerUI = require("swagger-ui-express")
const swaggerDocs = require("./swagger.json")

router.use("/", swaggerUI.serve)
router.get("/", swaggerUI.setup(swaggerDocs))

module.exports = router