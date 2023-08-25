import crypto from "node:crypto";

//? TO ENCRYPT
/* const secretKey = crypto.randomBytes(32);
// Generate an initialization vector
const iv = crypto.randomBytes(16);
// data to be encrypted
const plainText = "password123";
// create cipher object
const cipher = crypto.createCipheriv("aes-256-cbc", secretKey, iv);
// encrypt the data
let encryptedText = cipher.update(plainText, "utf-8", "hex");
// finalize the encryption
encryptedText += cipher.final("hex");

console.log(encryptedText); */

//? TO DECRYPT
/* // create Decipher object
const decipher = crypto.createDecipheriv("aes-256-cbc", secretKey, iv);

// decrypt the data
let decryptedText = decipher.update(encryptedText, "hex", "utf-8");

// finalize the decryption
decryptedText += decipher.final("utf-8");

console.log(decryptedText); // This is a secret message */

//? TO CREATE HASHES
/* const data = "password";

const hashAlgo = crypto.createHash("sha256");
hashAlgo.update(data);
const hash = hashAlgo.digest("hex");

console.log(`Hash: ${hash}`); */

//? OTHER METHOD TO HASH A PASSWORD

// larger numbers mean better security
const config = {
  // size of the generated hash
  hashBytes: 32,
  // larger salt means hashed passwords are more resistant to rainbow table, but
  // you get diminishing returns pretty fast
  saltBytes: 16,
  // more iterations means an attacker has to take longer to brute force an
  // individual password, so larger is better. however, larger also means longer
  // to hash the password. tune so that hashing the password takes about a
  // second
  iterations: 872791,
  digest: "sha512",
};

/**
   @params {String} password - given password to hash
   @returns {String} the hash corresponding to the password
  */
function hashPassword(password) {
  const { iterations, hashBytes, digest, saltBytes } = config;
  const salt = crypto.randomBytes(saltBytes).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, hashBytes, digest)
    .toString("hex");
  console.log([salt, hash].join("$"));
  return [salt, hash].join("$");
}
let a = hashPassword("passwords");

/**
   @params {String} password - password to verify
   @params {String} combined - a combined salt + hash returned by hashPassword function
   @returns {Boolean} true if password correspond to the combined. False otherwise
  */
function verifyPassword(password, combined) {
  const { iterations, hashBytes, digest } = config;
  const [salt, originalHash] = combined.split("$");
  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, hashBytes, digest)
    .toString("hex");
  return hash === originalHash;
}

console.log(verifyPassword("password", a));
