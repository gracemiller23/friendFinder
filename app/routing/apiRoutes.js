var friendsArray = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res){
        friendsArray.push(req.body);
        console.log("new friends array:"+ friendsArray);
       
      
          console.log(friendsArray);
          console.log("------------------------------------");

          var user = req.body;
            
          var userScores = user.scores;
          console.log("userScores: " + userScores);
        //keeps the loop from comparing the user to themselves
        var loopNum = friendsArray.length - 1;
          var newFriends = [];
          //loops through array of potential friends
          for (var j = 0; j < loopNum; j++){
            var totalDifference = 0;
                var potentialFriend = friendsArray[j].scores;
                console.log("potential friend scores: " + potentialFriend)
                    //loops through potential friend's scores to compare 
                    for (var m = 0; m < userScores.length; m++ ){
                        totalDifference += Math.abs((userScores[m] - potentialFriend[m]));
                    };
                //adds difference from each potential friend to an array
                newFriends.push(totalDifference);
            //end for loop
          }

    var bestieNum = Math.min.apply(null, newFriends);
    console.log("bestieNum: " +bestieNum);
    var findBestie = newFriends.indexOf(bestieNum);
    console.log("findBestie: " +findBestie);
    var bestieName = friendsArray[findBestie].name;
    var bestieImage = friendsArray[findBestie].photo;

    console.log("bestieName: " +bestieName);

    var bestie = {
        name: bestieName,
        photo: bestieImage
    }
    
   
    res.json(bestie);

    });



//end module.exports function
};