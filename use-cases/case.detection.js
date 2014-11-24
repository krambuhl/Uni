// Conditions & Compositions
var hasGeoLoc = Uni.Condition('geolocation' in navigator);

var hasCanvas = Uni.Condition(function() {
  var elem = createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
});

var hasCookies = Uni.Condition(function() {
  try {
    document.cookie = 'cookietest=1';
    var ret = document.cookie.indexOf('cookietest=') != -1;
    document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
    return ret;
  }

  catch (e) {
    return false;
  }
});

var hasRequirements = Uni.and(hasCanvas, hasCookies, hasGeoLoc);

// Responders
Uni.Respond(hasRequirements, function() { });