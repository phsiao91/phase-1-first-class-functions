function called() {
    return "I was called";
}

function receivesAFunction(called){
    called();
}

function returnsANamedFunction() {
    return function called() {};
  }

  let add = function (a, b) {
    return a + b;
};

  function returnsAnAnonymousFunction() {
    return function () {};
  }
