export function unary(fn) {
  return function apenasUmArgumento(arg) {
    return fn(arg);
  }
}

export function identity(v) {
  return v;
};

export function apply(fn) {
  return function(argArr) {
    return fn(...argArr)
  }
};

export function unapply(fn) {
  return function(...args) {
    return fn(args)
  }
};

export function partial(fn, ...args) {
  return function(...newArgs) {
    return fn(...args, ...newArgs)
  }
}