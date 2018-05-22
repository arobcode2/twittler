$(document).ready(function(){
  var hasBeenClickedMoreThanOnce = false; 
  $('.showNewTweets').click(function() {
    var index = streams.home.length - 1;
    //console.log(index);
    // console.log(streams.home);
    // init current array length as length of array
    var previousLength = streams.home.length - 1;
    console.log('index', index, 'prevLength', previousLength);
    // if we have clicked on show new tweets
    if (hasBeenClickedMoreThanOnce === true) {
      console.log('has been clicked more than once');
      // then run a while loop with the index being greater than or equal to the previous length 
      while(index >=previousLength) {
        console.log('we are now in the while loop');
        var tweet = streams.home[index];
        var $tweet = $('<div></div>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message);
        $tweet.appendTo('.tweetContainer');
        index -= 1;
      } 
    }
    //else
    else {
      //console.log('has not been clicked more than once');
      while(index >=0) {
        //console.log('we are in the while loop yay');
        var tweet = streams.home[index];
        var $tweet = $('<div></div>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message);
        $tweet.appendTo('.tweetContainer');
        index -= 1;
      }
      hasBeenClickedMoreThanOnce = true;
    }
  });
});




// $(document).ready(function(){
//   var $body = $('body');
//   $body.html('');

//   var index = streams.home.length - 1;
//   while(index >= 0){
//     var tweet = streams.home[index];
//     var $tweet = $('<div></div>');
//     $tweet.text('@' + tweet.user + ': ' + tweet.message);
//     $tweet.appendTo($body);
//     index -= 1;
//   }

// });
