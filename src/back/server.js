const http = require("http")
const url = require("url")

function start(route, handle){
    function onRequest(request, response) {
        const pathname = url.parse(request.url).pathname
        console.log("Request received for " + pathname)
        route(handle, pathname, response)
    }
    http.createServer(onRequest).listen(8080)
    console.log("Server running.")
}

exports.start = start

/*
Module starts server.
Server listens to incoming requests.
Incoming requests are passsed to router.js module.

Initialize: request, response, pathname
Pass-forward: handle, pathname, response
*/