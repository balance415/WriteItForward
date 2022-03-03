var express = require("express")

var bodyParser = require("body-parser");

// Create new instance of the express server
var app = express();


app.use(bodyParser.json());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Init the server
var server = app.listen(process.env.PORT || 4200, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

app.get("/api/status", function (req, res) {
    res.status(200).json({ status: "UP" });
});