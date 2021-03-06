// Machines

var newestTweet = Uni.Machine(function() {
  return getNewestTweet();
});


// Conditions & Compositions
var isPositiveSentiment = Uni.Conditions(function(tweet) {
  return sentiment(tweet) === 1;
});

var isNegativeSentiment = Uni.Conditions(function(tweet) {
  return sentiment(tweet) === -1;
});

var isNeutralSentiment = Uni.Conditions(function(tweet) {
  return sentiment(tweet) === 0;
});


// Responders
Uni.Respond(newestTweet)
  .when(isPositiveSentiment, function() {})
  .when(isNegativeSentiment, function() {})
  .when(isNeutralSentiment, function() {});