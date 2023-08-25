//? V as binary number = 01010110
//? V as hex number 56
//? V as Decimal number 86

//* show the unicode character code (Decimal number) = represent the letter "V" here

console.log("V".charCodeAt());
console.log("A".charCodeAt());

const buffer = new Buffer.from("VA", "utf-8"); //* utf-8 = unicode character code

//* the buffer is the list of each Decimal number
//* Buffer ce sont des datas qui sont envoyé par morceaux (chunks)
//* Si morceaux trop petit, attends qu'il soit suffisament grand pour envoyer
//* Si morceaux est gros, envoie les morceaux petit à petit
console.log(buffer.toJSON());

//* here show the HEX numbers
console.log(buffer);

//* show the original string passed
console.log(buffer.toString());

//* Will rewrite only the byte concerned and skip the last A
buffer.write("OAA");
console.log(buffer);
console.log(buffer.toString());
