//! une callback est une fonction passée dans une autre fonction en tant qu'argument

const greet = (params) => {
  console.log(`Hello ${params}`);
};

const higherOrderFunction = (callback) => {
  const name = "Gis";
  callback(name);
};

higherOrderFunction(greet);
