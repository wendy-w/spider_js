const get_eleven = require('./eleven')
const express = require('express')
var bodyParser = require('body-parser')
var child_process = require('child_process');
child_process.exec = function () {
    console.log(arguments)
}
child_process.spawn = function () {
    console.log(arguments)
    console.log(t)
    console.log(e)
}
var app = express()
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
}));
t = ''
e=''
app.post('/get_eleven', function (req, res) {
    let text = req.param('text')
    t = new Buffer(text, 'base64').toString()
    let url = req.param('url')
    let eleven = get_eleven(text, url)
    e=eleven
    res.send(eleven)
})

app.listen(3000)
