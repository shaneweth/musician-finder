var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT;
if (PORT == null || PORT == "") {
    PORT = 8000;
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("app listening on Port: " + PORT);
});
