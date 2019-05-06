var musician = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(musician);
    });


    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            musicianDif: 9999
        }

        var totalDifference = 0;
        var userInput = req.body;

        for (let i = 0; i < musician.length; i++) {
            for (let j = 0; j < musician[i].scores; j++) {
                var userInput = req.body.scores[j];
                var currentFriendScore = musician[i].scores[j];
                totalDifference += Math.abs(parseInt(userInput) - parseInt(currentFriendScore));
                console.log(totalDifference);
            }

            if (totalDifference <= bestMatch.musicianDif) {
                bestMatch.name = musician[i].name;
                bestMatch.photo = musician[i].photo;
            }
        }

        musician.push(userInput);
        res.json(bestMatch);


    })

}