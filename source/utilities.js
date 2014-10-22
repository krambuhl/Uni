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