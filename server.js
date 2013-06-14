"use strict";

var usage = require("usage");
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.get("/usage", function(req, res){

    usage.lookup(process.pid, function(error, result) {

        if (error) {
            console.error("Error on usage lookup.");
        }

        result.memory = (result.memory / 1048576).toFixed(2) + "MB";
        result.cpu = result.cpu.toFixed(2) + "%";

        console.log("Usage: ", result);

        var body = JSON.stringify(result, null, "\t");
        
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Content-Length", body.length);
        res.end(body);
    });
});

app.listen(port);
console.log("Listening on port " + port);