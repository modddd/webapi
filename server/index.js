const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const contactListRouter = require('../contacts')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/', contactListRouter)

module.exports = app