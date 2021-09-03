const axios = require('axios')
const https = require('https')

const raygun = require('raygun');

const raygunClient = new raygun.Client().init({
  apiKey: 'BJmDCHGMJrQ9L7oTOhX9xg',
  filters: ['page']
});

exports.pages = async (req, res) => {
  try {
    // const username = req.user.preferred_username
    const requestedPage = req.body.requestPage

    const pages = {
      'page1': 'https://api.themoviedb.org/3/trending/all/day?api_key=5c9c691aba3be1f748a1ad6dc3abc199',
      'page2': 'https://api.themoviedb.org/3/movie/top_rated?api_key=5c9c691aba3be1f748a1ad6dc3abc199&language=en-US',
      'page3': 'https://api.themoviedb.org/3/tv/popular?api_key=5c9c691aba3be1f748a1ad6dc3abc199&language=en-US',
      'page4': 'https://api.themoviedb.org/3/page/not_exist?api_key=5c9c691aba3be1f748a1ad6dc3abc199'
    }

    const config = {
      headers: { 'Content-Type': 'application/json;charset=utf-8'},
      timeout: parseInt(process.env.API_REQUEST_TIMEOUT),
      httpsAgent: new https.Agent({ rejectUnauthorized: false })
    }

    const resp = await axios
      .get(pages[requestedPage], config)
      .catch(err => {
        if (err.response) {
          raygunClient.send(err, {}, function () {}, {}, ['api request error', 'express', 'server'])
          // return err.response
        }
        // throw err
      })
    res.send(resp.data)

    raygunClient.send(new Error('Something impossible happened!'), {}, function () {}, resp.data, ['custom error', 'manual error', 'express', 'server']); //manual error
  
  } catch (err) {
    const status = err.response
      ? err.response.status
    : err.code === 'ECONNABORTED'
      ? 504
      : 500
    let error = err.response ? err.response.data : err
    
    console.error(status, error)

    raygunClient.send(err, {}, function () {}, {}, ['unhandled error', 'express', 'server'])

    return res
      .status(status)
      .send({ message: 'An unknown error occurred' })
  }
}
