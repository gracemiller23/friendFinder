var path = require("path");


module.exports = function(app){

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //general default path
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //end of module.exports function
}