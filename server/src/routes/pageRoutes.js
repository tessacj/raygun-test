const express = require('express')
const router = express.Router()
const { pages } = require('../controller/pageRoutes')
const { bodySchema } = require('../utils/schemas')
const { requestValidation } = require('../utils/requestValidation')

router.post(
  '/',
  requestValidation(bodySchema, 'body'),
  pages
)

module.exports = router
