if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  const express = require('express')
  const app = express()
  require('./startup/routes')(app)

  const raygun = require('raygun');

  const raygunClient = new raygun.Client().init({
    apiKey: 'BJmDCHGMJrQ9L7oTOhX9xg'
  });
    
  const port = process.env.PORT || 4900
  const startServer = async () => {
    try {
      app.listen(port, () => console.log(`Listening on port ${port}`))
    } catch (error) {
      raygunClient.send(`Unable to connect to Server: ${error}`)
      console.error(`Unable to connect to Server: ${error}`)
      process.exit(1)
    }
  }
  startServer()
  