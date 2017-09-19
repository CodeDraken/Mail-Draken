const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send({ get: 'success' })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
