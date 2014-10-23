Uni
===

```js

var isMediaSmall = Uni.Condition(function(width) {
    return width < 600;
});

var isMediaLarge = Uni.Condition(function(width) {
    return width > 1280;
});

var isPortrait = Uni.Condition(function(width, height) {
    return width < height
});

var isHighDpi = Uni.Condition(function() {
    // high dpi test
});

var isGalleryExpanded = Uni.Condition(function() {
    return $('.gallery').hasClass('is-expanded');
});

var isMediaMedium = Uni.and(Uni.not(isMediaSmall), Uni.not(isMediaLarge));

Uni.and(isMediaMedium, isPortait).when(function() {
   // setup single column  
   // destroy multi column
});

Uni.and(isMediaMedium, Uni.not(isPortait)).when(function() {
   // setup multi column
   // destroy single column  
});

isHighDpi.once(function() {
    // update to highrez images
});

isGalleryExpanded.while(function() {
    // center modal
});


var instance = Uni.Condition(true);

// Condition Instance API
instance.value;
instance.prev;
instance.nth(number); // if val/prev are not enough
instance.test(args);
instance.respond(func);
instance.once(func);
instance.when(func);
instance.while(func);
instance.addListener(name, func);
instance.removeListener(name, func);

instance.addListener('update', function(){ });
instance.addListener('respond', function(){ });

// Composition API
Uni.Compose(command, args);

// Commands:
// - not
// - and
// - or
// - equal

// Composing sugar
Uni.not()
Uni.and()
Uni.or()
Uni.equal()


// Composition Plugin API
Uni.addComposer(name, func);



$(window).on('resize', function() {
    var win = $(this);
    var width = win.innerWidth();
    var height = win.innerHeight();

    isMobile.test(width);
    isPortraitMobile.test(width, height)
});


```