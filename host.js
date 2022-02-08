var http = require("http")
const fs = require('fs')
http.request({
    host: "52.221.191.153",
    method: "GET",
    path: "/api/foods"
}, function (response) {
