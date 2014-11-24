// Machines
var windowSize = Uni.Machine(function(ev) {
  return {
    width: this.win.innerWidth(),
    height: this.win.innerHeight()
  };
})

.setup(function(update) {
  this.win = $(window);
  this.win.on('resize', update);
})

.destroy(function() {
  this.win.off('resize');
});

var windowRatio = Uni.Machine(function(size) {
  return size.width / size.height;
}).listenTo(windowSize, 'update');

// Conditions & Compositions

// Window Size
var isNarrowSize = Uni.Condition(function(size, mach) {
  return size.width < 640;
});

var isWideSize = Uni.Condition(function(size) {
  return size.width > 1140;
});

var isNotNormalSize = Uni.and(isNarrowSize, isWideSize);
var isNormalSize = Uni.not(isNotNormalSize);

// Window Ratio
var isPortraitRatio = Uni.Condition(function(ratio) {
  return ratio > 1;
});

var isLandscapeRatio = Uni.not(isPortraitRatio);


// Responders
Uni.Respond(windowSize)
  .when(isNormalSize, function() {})
  .when(isNotNormalSize, function() {});

Uni.Respond(windowRatio)
  .once(isPortraitRatio, function() {})
  .while(isLandscapeRatio, function() {});

