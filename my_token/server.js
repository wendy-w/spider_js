const digest = require('./digest')
const express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
}));
app.get('/get_code', function (req, res) {
    let ts = req.param('ts')
    let code = digest.digest(ts)
    res.send(code)
})

app.listen(3000)
