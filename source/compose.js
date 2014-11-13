var isMediaSmall = Uni.Condition(function(width) {
    return width < 600;
});

var isMediaLarge = Uni.Condition(function(width) {
    return width > 1280;
});

Uni.Compose('and', isMediaSmall, isMediaLarge);

// 

Uni.addComposer('and', function() {
  return _.every(normalizeArguments(arguments));
});

function normalizeArguments(args) {
  return _.map(args, function(condition) {
    if (condition instanceof Uni.Condition) {
      return condition.value;
    } else if (_.isFunction(condition)) {
      return Uni.Condition(condition).update().value;
    } else {
      return condition;
    }
  });
}


function testAll(names) {
  return split(names).map(function(name) {
    return test(name);
  });
}

// u.conditions.testOr("isRetina isMobile") ==> true/false
function testOr(names) {
  return testAll(names).some(function(name) { return name; });
}

// u.conditions.testAnd("isRetina isMobile") ==> true/false
function testAnd(names) {
  return testAll(names).every(function(name) { return name; });
}