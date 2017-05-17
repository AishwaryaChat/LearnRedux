const express = require('express')
// create the app
const app = express()
const PORT = process.env.PORT || 3000

// adds funationality to your app
app.use(express.static('public')) // will expose the folder 'public' to the web server

// Re-directing https requests to http requests, as the API we are using only gives out http data
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next()
  }
})

app.listen(PORT, () => {
  console.log('Express server is running on port ' + PORT)
})
