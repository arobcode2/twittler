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
        var latestTweet = $tweet.html('@' + user + ': ' + tweet.message + ' created at ' + time());
      // console.log('childNodes', $('.tweetContainer')[0].childNodes);
      console.log(typeof $('.tweetContainer')[0].childNodes);
      for (var key in $('.tweetContainer')[0].childNodes) {
        console.log(key);
        // if (key === 'innerText') {
        // console.log(innerText);
        // }
      }

        $('.tweetContainer')[0].childNodes.forEach(function(tweets){ 
            //console.log(tweets);
          for (var uniqueMessage in tweets) {
          }
          //if ($('.tweetContainer')[0].childNodes[0].innerText !== child.innerText) {
            //console.log('this is the same tweet man');
            latestTweet.appendTo('.tweetContainer');
          //}
        })
        index -= 1;
        
      } 
    }
    else {
      while(index >=0) {
         tweet = streams.home[index]; 
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
        // var $myContainer = $('.tweetContainer');
        // $myContainer.html('');
        

        index -= 1;
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
            $('<div class= "userTweets">' + userMessage.message + ' created at ' + time() + '</div>').appendTo('.userSpecificTweetContainer');
          });
        }
      }
    });
  });
});






