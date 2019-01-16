const fs = require("fs")

function readIndex(response){
    console.log("Request handler 'readIndex' was called.")
    fs.readFile("./src/front/index.html", function (err, html){
        if (err) throw err
        response.writeHeader(200, {"Content-Type": "text/html"})
        response.write(html)
        response.end()
    })
}

function readFavicon(response){
    console.log("Request handler 'readFavicon' was called.")
    fs.readFile("./img/favicon.png", function (err, png){
        if (err) throw err
        response.writeHeader(200, {"Content-Type": "image/png"})
        response.write(png)
        response.end()
    })
}

function readCSS(response){
    console.log("Request handler 'readCSS' was called.")
    fs.readFile("./src/front/style.css", function (err, css){
        if (err) throw err
        response.writeHeader(200, {"Content-Type": "text/css"})
        response.write(css)
        response.end()
    })
}

function readJS(response){
    console.log("Request handler 'readJS' was called.")
    fs.readFile("./src/front/dosome.js", function (err, js){
        if (err) throw err
        response.writeHeader(200, {"Content-Type": "text/javascript"})
        response.write(js)
        response.end()
    })
}

exports.readIndex = readIndex
exports.readFavicon = readFavicon
exports.readCSS = readCSS
exports.readJS = readJS

/*
Module contains functions associated to paths in index.js.
Functions read files asynchronously.
Read file is passed back to the router.js in response.

Pass-backward: response.
*/