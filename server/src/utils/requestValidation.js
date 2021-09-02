/**
 * function to validate req.body, req.params, req.query
 * @param schema {object} string schema to validate against
 * @param property {string} which property to check i.e params, query or body
 */
 exports.requestValidation = (schema, property) => {
    return (req, res, next) => {
      const { error } = schema.validate(req[property], { abortEarly: false })
      const valid = error == null
  
      if (valid) {
        next()
      } else {
        const message = error.details.map(({ message }) => message)
        this.$raygunClient.send('Error:', message) //raygun validation error
        console.log('Error:', message)
        return res.status(422).send({ error: `${message}` })
      }
    }
  }
  