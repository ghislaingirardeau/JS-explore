/* let re = /(\w+)\s(\w+)/;
let chaine = "Alain Dupont";
let nouvelleChaine = chaine.replace(re, "$2-$1");
console.log(nouvelleChaine); */

//! ECRITURE REGEX

//* 2 facons d'écire une regex
let re1 = new RegExp("abc"); //! penser à échapper les characters ex:/
let re2 = /aul/; //* match one = renvoie alors le tableau de résultat
let re3 = /abc/g; //* match all / g: Global search, don’t return after the first match.
let re4 = /abc/i; //* Case-insensitive search

//* REGEX avec character speciaux

let reg4 = /ea?/g; //match e or e+a
let reg5 = /..at/g; //match letter before at . est le nombre de lettre à matcher

//? LENGTH & MULTIPLIE OCCURENCE
let reg6 = /\w{5,}/g; // use length word (btween 3 and 5)
let regex6 = /^((\w{3}.){2})$/; // match "abc.ezr."
// un mot de 3 longueur qui se termine par u point répéter 2 fois

//? Character Set [xyz]: peut le placer avant ou apres
var regex = /[a-z]ear/;
var regexBis = /[a-z]ear[*-]?/; // *- sont optionnel
var regexReverse = /[^bt]ear/;
console.log("Character Set", regex.test("Tear"));
console.log("Character Set", regex.test("bear*"));
console.log("Character Set", regex.test("fear"));

//? Meta-Characters
/* 
\d: Match any digit character (same as [0-9] ).
\w: Match any word character. A word character is any letter, digit and underscore. This is the ame as [a-zA-Z0–9_] , i.e alphanumeric characters.
\s: Match a whitespace character (spaces, tabs etc).
\t: Match a tab character only.
\b: Find a match at the beginning or ending of a word. Also known as a word boundary.
. (period): Matches any character except for newline.
\D: Match any non-digit character. This is the same as [^0–9].
\W: Match any non-word character. This is the same as [^a-zA-Z0–9_].
\S: Match a non-whitespace character.
 */

//? Quantifiers
var regexQ = /\d+/; //Matches the preceding expression one or more times.
console.log(regexQ.test("8"));
console.log(regexQ.test("88899"));

var regexQ2 = /go*d/;
console.log("*", regexQ2.test("gooood"));

var regexQ3 = /^g/; //the caret (^) matches the start of the string.
console.log(regexQ3.test("good"));
console.log(regexQ3.test("bad"));

var regexQ4 = /.com$/; //The dollar ($) sign matches the end of the string.
console.log(regexQ4.test("good@mail.com"));
console.log(regexQ4.test("bad@mail"));

var regexQ5 = /go{2}d/; //Matches exactly N occurrences of the preceding regular expression.
console.log(regexQ5.test("good"));
console.log(regexQ5.test("god"));

var regexQ6 = /\/post\//; // pour echapper un caracter special -./ ect
console.log("escape", "/post/".match(regexQ6));

// pour echapper un character special et le capturer
var regexQ7 = /\/post\/(\d+)/; // () pour capturer
console.log("escape & capture", "/post/12".match(regexQ7));
var regexQ7bis = /\/post\/(\d+)\/(\d+)?/; // () pour capturer, dernier digit en optionnel par exemple
console.log("escape & capture", "/post/12/123".match(regexQ7bis));

var regexQ8 = /Red(?=@gmail.com)/; //x(?=y): Matches x only if x is followed by y
console.log("Red@gmail.com".match(regexQ8));

//! METHODE REGEX
//! Utilise les regex avec les méthodes match, matchAll, replace, search et split de String
/* let names = "pierre , Paul , jack";
//! MATCH
console.log("MATCH", "abc".match(re3)); //? match ou exec renvoie le tableau de résultat OU null

//! TEST
console.log("TEST ", re1.test(names)); //? test renvoie un booléeun

//! EXEC
console.log("EXEC ", re2.exec(names)); //? renvoie le tablbeau avec la 1ere corregpondance

//! SEARCH: renvoie index 1er element trouvé
var re9 = /aul/;
console.log("SEARCH ", names.search(re9));

//! SPLIT
var re10 = /,/;
var nameList = names.split(re10);
console.log("SPLIT ", nameList);

//! REPLACE
const re11 = /paul/i; //* i not sensitive case
console.log("REPLACE ", names.replace(re11, "jean"));
 */
