var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT || 5000)
