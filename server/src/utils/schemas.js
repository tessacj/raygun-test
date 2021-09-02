const Joi = require('joi')

const schema = Joi.object({
  requestPage: Joi.string()
})

exports.bodySchema = schema
