$(document).ready(function(){
  var hasBeenClickedMoreThanOnce = false;

  var Time = function() {
    var time = {};
    time.seconds = 0;
    time.minutes = 0;
    time.hour = 0;
    time.convertHour = function() {
      var convertedHour = hour;   
      if (hour > 12) {
        convertedHour -= 12;
        return convertedHour;
      }
    };
    time.concatenateDayOrNight = function() {
      var timeStr = time.convertHour() + ':' + minutes + ':' + seconds;
      if (hour >= 12) {
         timeStr += " P.M.";
      } else {
         timeStr += " A.M.";
      }
       return timeStr;
    };
    return time;
  };

  var Tweet = function() {
    var tweet = {};
    tweet.tweet,
    tweet.$tweet, 
    tweet.date 
    return tweet;
  };

  var now = Time();

  var generateNewTweets = function() {

  };
  $('.showNewTweets').click(function() {
    var tweetObj = Tweet();
    var i = streams.home.length - 1;
    var previousLength = streams.home.length - 1;
    //now.convertHour();
    if (hasBeenClickedMoreThanOnce === true) {
      while(i >=previousLength) {
         tweetObj.tweet = streams.home[i];
         user = '<button class="userAnchor">' + tweetObj.tweet.user + ' </button>';
         tweetObj.$tweet = $('<div></div>');
         tweetObj.date = new Date();
         seconds = date.getUTCSeconds();
         minutes = date.getUTCMinutes();
         hour = date.getHours();
        var latestTweet = tweetObj.$tweet.html('@' + user + ': ' + tweetObj.tweet.message + ' created at ' + now.concatenateDayOrNight());
        
        $('.tweetContainer')[0].childNodes.forEach(function(tweets){ 
            latestTweet.appendTo('.tweetContainer');
        });
        i -= 1;
        
      } 
    }
    else {
      while(i >=0) {
         tweet = streams.home[i]; 
         user = '<button class="userAnchor">' + tweet.user + ' </button>';
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
        };
        var concatenateDayOrNight = function() {
          var timeStr = convertHour() + ':' + minutes + ':' + seconds;
          if (hour >= 12) {
             timeStr += " P.M.";
          } else {
             timeStr += " A.M.";
          }
           return timeStr;
        };
        $tweet.html('@' + user + ': ' + tweet.message + ' created at ' + concatenateDayOrNight());
        $tweet.appendTo('.tweetContainer');
        i -= 1;
      }
      hasBeenClickedMoreThanOnce = true;
    }
    $('.userAnchor').click(function() {
      $('.userTweets' ).remove();
      // for each user in streams.user..
      for (var person in streams.users) {
        // if the button we clicked on is equal to the current user..
        if ($(this)[0].innerText === person) {
          // for each object in the array..
          streams.users[person].forEach(function(userMessage) {
            // append message property value to userSpecificTweetContainer 
            $('<div class= "userTweets">' + userMessage.message + ' created at ' + now.concatenateDayOrNight() + '</div>').appendTo('.userSpecificTweetContainer');
          });
        }
      }
    });
  });
});






