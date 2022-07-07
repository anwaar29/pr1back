const express = require ('express')
const detailsControler = require('../Component/details');

const detalisRouter = express.Router()

detalisRouter.route("/details")
.get(detailsControler.API)

module.exports= detalisRouter

