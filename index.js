const express = require('express')
const app = express()
const port = 3000
const cors=require('cors')

// middleware
app.use(express.json())





// testing api 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})