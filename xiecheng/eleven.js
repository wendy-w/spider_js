const requireF=require
require = function(arg){
    if (arg=='path'){
        throw 'fucj'
    }
    return requireF(arg)
}
const process = require('process')
const JSDOM = require('jsdom').JSDOM
process.exit = function () {
    throw  'fuck'
}
const navigator = {
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
        geolocation: {}
}

function Image() {

}
setTimeout=function () {

}

function get_eleven(text, url) {

    text = new Buffer(text, 'base64').toString()
    url = new Buffer(url, 'base64').toString()
    let dom = new JSDOM('<html><head><body>hh</body></head></html>')
    let location = {'href': url}
    let document = dom.window.document
 let window = {location: location, document: document,constructor:{toString:function () {
                return '[object Window]'
            }}}
    let eleven = null

    function CASrYVcraFQgjGciKk(f) {
        eleven = f()
    }

    eval(text)


    return Buffer.from(eleven).toString('base64')
}

module.exports = get_eleven

