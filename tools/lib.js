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

export function map(fn) {
  return function(arr) {
    return arr.map(fn);
  }
}

export function prop(key) {
  return function(obj) {
    return obj[key];
  }
}

export function multiply(multi) {
  return function(numero) {
    return numero * multi
  };
}

export function sum (arr) {
  return arr.reduce(function(acc, valorCorrente) {
    return acc + valorCorrente;
  }, 0);
}

export function curry(fn,arity = fn.length) {
  return (function nextCurried(prevArgs){
      return function curried(nextArg){
          var args = [ ...prevArgs, nextArg ];

          if (args.length >= arity) {
              return fn( ...args );
          }
          else {
              return nextCurried( args );
          }
      };
  })( [] );
}


export function add (a) {
  return function(b) {
    return a + b;
  }
}

export function filter(fn) {
  return function (arr) {
    return arr.filter(fn);
  }
}

export function isOdd(n) {
  return n % 2 !== 0;
}

export function isEven(n) {
  return n % 2 === 0;
}

export function gt(n1) {
  return function (n2) {
    return n2 > n1;
  }
}

export function gte(n1) {
  return function (n2) {
    return n2 >= n1;
  }
}

export function lt(n1) {
  return function (n2) {
    return n2 < n1;
  }
}

export function lte(n1) {
  return function (n2) {
    return n2 <= n1;
  }
}

export function trim(text) {
  return text.trim();
}

export function toUpper(text) {
  return text.toUpperCase();
}

export function compose(...fns) {
  return function (x) {
    return fns.reduceRight(function(y, f) {
      return f(y)
    }, x)
  }
}

export function composeP(...fns) {
  return function (x) {
    return fns.reduceRight(function(y, f) {
      return Promise.resolve(y).then(f)
    }, x)
  }
}

export function pipe(...fns) {
  return function (x) {
    return fns.reduce(function(y, f) {
      return f(y)
    }, x)
  }
}

export function pipeP(...fns) {
  return function (x) {
    return fns.reduce(function(y, f) {
      return Promise.resolve(y).then(f)
    }, x)
  }
}