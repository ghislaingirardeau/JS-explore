import chalk from "chalk";

const log = console.log;

//? TO IMMEDIATLY CALL A FUNCTION lorsque le js se lance
(() => {
  log(chalk.yellow("Hello world!"));

  log(chalk.blue.bgRed.bold("Hello world!"));

  log(chalk.underline.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));
})();

//? EXAMPLE AVEC MAP
const mapList = [
  {
    nom: "jean",
    age: 42,
  },
  {
    nom: "gigi",
    age: 30,
  },
  {
    nom: "paul",
    age: 21,
  },
];
console.log(mapList.map((e) => (e.age > 25 ? e.age : "mineur")));

//? FINALLY INSIDE A TRY CATCH

const tryCatchWithFinailly = () => {
  try {
    console.log("try to do this");
    throw "error happen";
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Do even with error or success");
  }
};

tryCatchWithFinailly();

//? FONCTION RECURSIVE EXEMPLE
/**
 * Permet de créer une factorielle
 * @param {number} number
 * @returns {number}
 */
const factorielle = (number) => {
  if (number === 1) {
    return 1;
  } else {
    return number * factorielle(number - 1);
  }
};

console.log(factorielle(7));

//? REDUCE = additionner, comparer
const list = [-5, -8, -4, 2, -3];
const output = list.reduce(
  (acc, prev) => (Math.abs(prev) < Math.abs(acc) ? prev : acc)
  // le résultat renvoyé est prev ou acc sera renvoyé comme acc
  // dans la prochaine itération
);

//? TO HIDE SOMETHING BY ADDING CHARACTER AT BEGIN OR END
const secretNumber = "12345678";
const last4digits = secretNumber.slice(-4);
console.log(last4digits.padStart(secretNumber.length, "*"));

//? RETURN AN ARRAY FROM ANY OBJECT OR STRING
const lastName = "mato";
const lnArray = Array.from(lastName); // lnArray = ['m','a','t','o']

//? MAP: compare 2 tables
const list1 = [-5, -8, -4, 2, -3];
const list2 = [-5, -18, -14, 2, -13];
const output2 = list1.map((e, i, a) => (list2[i] === e ? i : false));
