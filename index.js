const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('assets'))



app.get('/', (req, res) => {
    res.send('<h1>f1 assets server</h1>')
  })

app.get('/test', (req, res) => {
    res.send('<h1>test</h1>')
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})