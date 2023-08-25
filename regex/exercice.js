//! DATE

const dateTest = "12-02-83";
const dateTest2 = "12-02-1983";

let regex = /^\d{2}-\d{2}-\d{2}(\d{2})?$/;
let regexBis = /^(\d{2}-){2}(\d{2})(\d{2})?$/;

console.log("Date", regexBis.test(dateTest2));

let regex2 = /^((\w{3}.){3})\w{3}$/;

console.log(regex2.test("abc.def.ghi.jkl"));

//! PHONE NUMBER

const regex3 = /^([+]\d{2}[ ])?(\d{3}[ \-+]?){2}(\d{4})$/;

let phone0 = "1234567890";
let phone1 = "123-456-7890";
let phone2 = "123 456 7890";
let phone3 = "123+456 7890";
let phone4 = "+11 123+456 7890";

console.log("phone4", regex3.test(phone4));

//! URL EXTRACT

const URI = "/posts/:id";
const sample = "/posts/12";
console.log(URI.replace("/", "\\/"));
const regexUrl = (path) =>
  new RegExp(`^${path.replace("/", "\\/").replace(/:\w+/, "(\\d+)")}$`);
//new RegExp(`^${path.replace(/\//g, "\\/").replace(/\w+/g, "([0-9]+)")}$`);
//new RegExp(`^${path.replace("/", "\\/").replaceAll(/:\w+/g, "(\\d+)")}$`); FOR 2 PARAMS

console.log(sample.match(regexUrl(URI)));

//! EMAIL & PASSWORD

const email = "totodfvdf@gmail.fr";
const regexMail = /^\w+@([a-z]{2,})\.([a-z]{2,3})$/;
console.log("email", regexMail.test(email));

const password = "eEazer1!";
password.replace(/ /, "");
const regexPassword = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[!?*]).*$/;
// .* n'importe quel character entre
// (?=.{6,}) 6 character lenght
// (?=.*\d) avoir un digit
// (?=.*[A-Z]) doit avoir une majuscule
// (?=.*[!?*]) doit avoir !?*, excluera tous les autres
console.log("password", regexPassword.test(password));
