const express = require('express')
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('ejs', ejsMate)

app.get('/', (req, res) => {
    res.render('pages/index')
})

























app.listen(3000, () => {
    console.log('On port 3000')
})