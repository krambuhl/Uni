(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'exports'], function(_, exports) {
      root.Uni = factory(root, exports, _);
    });
  } else if (typeof exports !== 'undefined') {
    exports = factory(root, exports, require('underscore'));
  } else {
    root.Uni = factory(root, {}, root._);
  }
}(this, function(root, Uni, _) {

//=include('utilities.js')

  return Uni;
}));
