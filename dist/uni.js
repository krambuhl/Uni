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

// ###Utilities

// #####result
// returns get result of an expression
function result(expr, context) {
  return _.isFunction(expr) ? expr.apply(context) : expr;
}

// #####first
// returns first undefined argument sequentially
function first() {
  return _.find(arguments, function(arg) { 
    return !_.isUndefined(arg);
  });
}

  return Uni;
}));
