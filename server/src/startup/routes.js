const express = require('express')
const pageRoutes = require('../routes/pageRoutes')
// const raygunDef = require('../middlewares/raygun')

module.exports = (app) => {
  if (process.env.NODE_ENV !== 'production') {
  }
 
  app.use(express.json({ limit: '200mb' }))
  app.use((req, res, next) => {
    //allow cors globally
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    res.header('Access-Control-Allow-Methods', '*')
    next()
  })

  // app.use(raygunDef)
  app.use('/api/pages', pageRoutes)
  
}
