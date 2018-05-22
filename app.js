$(document).ready(function(){
  var hasBeenClickedMoreThanOnce = false; 
  $('.showNewTweets').click(function() {
    var index = streams.home.length - 1;
    // init current array length as length of array
    var previousLength = streams.home.length - 1;
    // if we have clicked on show new tweets
    if (hasBeenClickedMoreThanOnce === true) {
      // then run a while loop with the index being greater than or equal to the previous length 
      while(index >=previousLength) {
        var tweet = streams.home[index];
        var $tweet = $('<div></div>');
        // find current time
        var date = new Date();
        // var time = hour;
        // time.toString();

        //date.setTime(result_from_Date_getTime);
        var seconds = date.getUTCSeconds();
        var minutes = date.getUTCMinutes();
        //var hour = date.getHours();
        var hour = date.getHours();
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
        $tweet.text('@' + tweet.user + ': ' + tweet.message + ' created at ' + time());
        $tweet.appendTo('.tweetContainer');
        index -= 1;
      } 
    }
    //else
    else {
      while(index >=0) {
        var tweet = streams.home[index];
        var $tweet = $('<div></div>');
        var date = new Date();
        //date.setTime(result_from_Date_getTime);
        var seconds = date.getUTCSeconds();
        var minutes = date.getUTCMinutes();
        var hour = date.getHours();
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
        $tweet.text('@' + tweet.user + ': ' + tweet.message + ' created at ' + time());
        $tweet.appendTo('.tweetContainer');
        index -= 1;
      }
      hasBeenClickedMoreThanOnce = true;
    }
  });
});

/*
var time = "16:30:00"; // your input

time = time.split(':'); // convert to array

// fetch
var hours = Number(time[0]);
var minutes = Number(time[1]);
var seconds = Number(time[2]);

// calculate
var timeValue;

if (hours > 0 && hours <= 12) {
  timeValue= "" + hours;
} else if (hours > 12) {
  timeValue= "" + (hours - 12);
} else if (hours == 0) {
  timeValue= "12";
}
 
timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

// show
alert(timeValue);
console.log(timeValue);
*/