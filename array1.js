const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/array1', (req, res) => {

    let kata = ["bebas pilih","saya","kAMU"]

    let urut = kata.sort() 

    return res.send(`kata ini berurutan dari ${kata}`)

})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
