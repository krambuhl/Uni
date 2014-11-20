```js

// CORE API
Uni.Machine(func)
Uni.Condition(func)
Uni.Compose(method, conditions...)
Uni.Respond(method, machine, condition, func)
Uni.Respond(machine, condition, func)

// Config
Uni.cache(name, obj)
Uni.addComposer(name, func)
Uni.addResponder(name, func)

//Uni.Compose sugar
Uni.not(machine)
Uni.and(conditions...)
Uni.or(conditions...)

//Uni.Respond sugar
Uni.once(machine, func)
Uni.when(machine, func)
Uni.while(machine, func)
```


##Code

```js

// global cache for objects that will be referenced often
Uni.cache('win', $(window));

// create machine that tracks window sizes
var screenWidth = Uni.Machine(function() {
    return Uni.cache('win').innerWidth();
});

// tell the machine to update it's
// state on window resize
screenWidth.listenTo(Uni.cache('win'), 'resize')

// create a condition to evaluate machine states
// will be true if the screen width is less that 640
var isNarrowScreen = Uni.Condition(function(currentWidth) {
    return currentWidth < 640;
});

// Uni.compose is used to create complex conditions
// Uni.not(condition) is sugar for Uni.compose('not', condition)
var isNotNarrowScreen = Uni.Compose('not', isNarrowScreen);

// respond is used to listen to specific changes in 
// machine state.

// Uni.Respond(`when`) fires once everytime the condition switches from false to true.
Uni.Respond('when', screenWidth, isNarrowScreen, function(mach, cond) {
    // setup mobile only components
});

Uni.Respond('when', screenWidth, isNotNarrowScreen, function(mach, cond) {
    // destroy mobile only components
});

```