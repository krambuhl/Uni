
// Machines
var router = Uni.Machine(function() {
  return window.location.hash;
})

.setup(function(update) {
  this.win = $(window);
  this.win.on('hashchange', update);
})

.destroy(function(update) {
  this.win.off('hashchange', update);
});


// Conditions & Compositions
var isRouteChanged = Uni.Conditions(function(hash, mach) {
  return mach.value !== mach.prev;
})

// Responders
Uni.Respond(router).while(isRouteChanged, function(hash, mach) {
  console.log('route', hash);
});