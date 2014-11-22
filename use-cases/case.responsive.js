Uni.cache('win', $(window));

// Machines
var windowSize = Uni.Machine(function() {
  return {
    width: Uni.cache('win').innerWidth(),
    height: Uni.cache('win').innerHeight()
  };
}).listenTo(Uni.cache('win'), 'resize');

var windowRatio = Uni.Machine(function(data) {
  return data.width / data.height;
}).listenTo(windowSize);

// Conditions & Compositions

// Window Size
var isNarrowSize = Uni.Condition(function(size, mach) {
  return size.width < 640;
});

var isWideSize = Uni.Condition(function(size) {
  return size.width > 1140;
});

var isNormalSize = Uni.and(Uni.not(isNarrowSize), Uni.not(isWideSize));

// Window Ratio
var isPortraitRatio = Uni.Condition(function(ratio) {
  return ratio > 1;
});

var isLandscapeRatio = Uni.not(isPortraitRatio);


// Responders

Uni.Respond(windowSize, isNarrowSize, function() {});
Uni.Respond(windowSize, isNormalSize, function() {});
Uni.Respond('once', windowRatio, isPortraitRatio, function() {});
Uni.Respond('while', windowRatio, isLandscapeRatio, function() {});