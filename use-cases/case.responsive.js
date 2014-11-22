Uni.cache('win', $(window));

// Machines
var screenSize = Uni.Machine(function() {
  return {
    width: Uni.cache('win').innerWidth(),
    height: Uni.cache('win').innerHeight()
  };
}).listenTo(Uni.cache('win'), 'resize');

var screenRatio = Uni.Machine(function(data) {
  return data.width / data.height;
}).listenTo(screenSize);

// Conditions & Compositions

// Screen Size
var isNarrowScreen = Uni.Condition(function(size) {
  return size.width < 640;
});

var isWideScreen = Uni.Condition(function(size) {
  return size.width > 1140;
});

var isNormalScreen = Uni.and(Uni.not(isNarrowScreen), Uni.not(isWideScreen));

// Screen Ratio
var isPortraitRatio = Uni.Condition(function(ratio) {
  return ratio > 1;
});

var isLandscapeRatio = Uni.not(isPortraitRatio);


Uni.respond(screenWidth, isNormalScreen, function(mach, cond) { });
Uni.respond(screenWidth, isNormalScreen, function(mach, cond) { });
Uni.respond(screenWidth, isPortraitRatio, function(mach, cond) { });