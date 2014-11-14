 Uni
===

Uni is a runner and composer of conditions.  

###Uni.Condition

####Condition(value[, options])

A basic condition is useful for simple conditions and basic feature detection:

```js
var isTrueTrue = Uni.Condition(true);
```

Uni conditions are not restricted to booleans.  As state machines, they can keep track of any variable types, including strings or objects.

```js
var currentHotWord = Uni.Condition(function() {
    return API.get('hot-word'); 
});
```


####Condition(function[, options])


```js
var isMediaSmall = Uni.Condition(function(width) {
    return width < 600;
});

var isMediaLarge = Uni.Condition(function(width) {
    return width > 1280;
});
```

###Uni.Compose(action, conditions)

Uni.Compose is used to build complex conditions made up of other conditions and other compositions.

#####Composing sugar

- `Uni.not(args)` ==> `Uni.Compose('not', args)`
- `Uni.and(args)` ==> `Uni.Compose('and', args)`
- `Uni.or(args)` ==> `Uni.Compose('or', args)`




###Example

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



// Condition Instance API
instance.set(value)
instance.test(args);

// 
instance.value;
instance.prev;
instance.first;
instance.nth(number); // if val/prev are not enough
instance.history; // ==> [value, prev, nth(2), nth(3), first]

instance.respond(func);
instance.once(func);
instance.when(func);
instance.while(func);

instance.listenTo(anotherInstance); // runs test on listened instance test
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