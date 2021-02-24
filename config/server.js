const express = require('express')
const consign = require('consign')
const app = express()
const bodyparser = require('body-parser')
const ejs = require('ejs')

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('./public'))
app.use(bodyparser.urlencoded({extended: true}))

consign()
    .include('app/routes')
    .into(app)

module.exports = app