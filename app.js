$(document).ready(function(){
  var hasBeenClickedMoreThanOnce = false;


  $('.showNewTweets').click(function() {
    var index = streams.home.length - 1;
    var previousLength = streams.home.length - 1;
    var tweet;
    var $tweet
    var date;
    var seconds;
    var minutes;
    var hour;
    if (hasBeenClickedMoreThanOnce === true) {
      while(index >=previousLength) {
         tweet = streams.home[index];
         user = '<a href=".userSpecificTweetContainer" class ="userAnchor">' + tweet.user + ' </a>';
         $tweet = $('<div></div>');
         console.log($tweet);
         date = new Date();
         seconds = date.getUTCSeconds();
         minutes = date.getUTCMinutes();
         hour = date.getHours();
        var convertHour = function() {
          var convertedHour = hour;   
          if (hour > 12) {
            convertedHour -= 12;
            return convertedHour;
          }
        }
        var time = function() {
          var timeStr = convertHour() + ':' + minutes + ':' + seconds;
          if (hour >= 12) {
             timeStr += " P.M.";
          } else {
             timeStr += " A.M.";
          }
           return timeStr;
        }
        $tweet.html('@' + user + ': ' + tweet.message + ' created at ' + time());
        $tweet.appendTo('.tweetContainer');
        index -= 1;
      } 
    }
    else {
      while(index >=0) {
         tweet = streams.home[index]; 
         user = '<a href=".userSpecificTweetContainer" class ="userAnchor">' + tweet.user + ' </a>';
         $tweet = $('<div></div>');
         date = new Date();
         seconds = date.getUTCSeconds();
         minutes = date.getUTCMinutes();
         hour = date.getHours();
        var convertHour = function() {
          var convertedHour = hour;   
          if (hour > 12) {
            convertedHour -= 12;
            return convertedHour;
          }
        }
        var time = function() {
          var timeStr = convertHour() + ':' + minutes + ':' + seconds;
          if (hour >= 12) {
             timeStr += " P.M.";
          } else {
             timeStr += " A.M.";
          }
           return timeStr;
        }
        $tweet.html('@' + user + ': ' + tweet.message + ' created at ' + time());
        $tweet.appendTo('.tweetContainer');       
        index -= 1;
      }
      hasBeenClickedMoreThanOnce = true;
    }
  });
  $('.testBTN').click(function() {
    // get a list of tweets on its own onClick function
    alert('you are idk working or such');
    //streams.user.appendTo('.userSpecificTweetContainer');
    // append list of tweets to userSpecificTweetContainer
  });
});

