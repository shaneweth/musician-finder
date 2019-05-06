var friends = require("../public/friends");

module.exports = function(app) {

    app.get("/api/friendslist", function(req, res) {
        res.json()
    }
}