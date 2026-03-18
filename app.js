const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  throw new ('error')
  res.send('9') // change this string to ensure a new version deployed
})

// checkHealth endpoint
app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)// eslint-disable-line no-console
})
