function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log("stuff");
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return () => console.log("more stuff");
}
