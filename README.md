 Uni
===

Uni is a runner and composer of state machines.  

##Machine

A Uni machine is a state machine that can respond to changes over time.  States can be determined by static setters or listen to other state machines

####Machine(value, options)

A basic sate machine is useful for simple conditions and basic feature detection:

```js
var isTrueTrue = Uni.Machine(true);
```

State machines are not restricted to booleans, they can keep track of any variable types, including strings or objects.

```js
var currentHotWord = Uni.Machine(function() {
    return API.get('hot-word'); 
});
```

####Machine(function, options)

State Machines can also be functions that can be updated from external event listeners.  

```js
var isMediaSmall = Uni.Machine(function(width) {
    return width < 600;
});

var isMediaLarge = Uni.Machine(function(width) {
    return width > 1280;
});
```

###Machine Instance API

######Instance Setup

```js
var hasEventListener = Uni.Machine('radEventListener' in window); // typo!
var windowWidth = Uni.Machine(function() {
    return window.innerWidth;
});
```

####Setters

#####set(value)

```js
hasEventListener.set('addEventListener' in window); // fix type
```

#####set(func)

```js
hasEventListener.set(function(win) {
    return 'addEventListener' in win;
});
```

#####update(args...)

```js
hasEventListener.update(window);
windowWidth.update();
```

####Getters

#####value

```js
hasEventListener.value; // ==> true
windowWidth.value; // ==> 1000
```

#####nth(index)

`first`, `prev`, `value` are all sugar aliases of the `nth` function.

```js
hasEventListener.nth(0); // ==> true
windowWidth.nth(1); // ==> 995
```

#####history

```js
hasEventListener.history // ==> [true, true]
windowWidth.history; // ==> [1000, 995, 994];
```

####Responders

#####respond(func)

```js

isMediaSmall.respond(function() {
    html.addClass('media-small');
})
```


#####respond(value, func)

```js

windowWidth.respond(function() {
    return this.value > 1140;    
}, function() {
    html.addClass('media-large');
})
```

#####once(func)

```js

isMediaSmall.once(function() {
    html.addClass('media-small');
})
```

#####when(func)

```js

isMediaSmall.when(function() {
    html.addClass('media-small');
})
```

#####while(func)

```js

isMediaSmall.while(function() {
    html.addClass('media-small');
})


####Listeners

#####listenTo(func)

```js

isMediaSmall.listenTo(windowWidth);
```

#####addListener(name, func)

```js

isMediaSmall.addListener("change", function(value, prev) {
    dom.text(value);
});
```


#####addListener(name, func)

```js

isMediaSmall.removeListener("change");
```

#####Listener Events

- `set`
- `update`
- `change`


##Uni.Compose(action, machines)

Uni.Compose is used to build complex machines.  Compositions are special machines that can build complex logic around other listened machines.

#####Composing sugar

- `Uni.not(args)` ==> `Uni.Compose('not', args)`
- `Uni.and(args)` ==> `Uni.Compose('and', args)`
- `Uni.or(args)` ==> `Uni.Compose('or', args)`



##Static Methods

####Uni.addComposer()