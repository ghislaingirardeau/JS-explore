//? MANAGE FILE SYSEMT
//? EXAMPLE READ A CONFIG FILE, SAVE OR COPY A FILE, STREAM A VIDEO OR AUDIO

//* WORK WITH FS MODULES AS A PROMISE

import fs from "node:fs/promises";

fs.readFile("index.html", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//* WORK WITH FS MODULE NOT PROMISES BUT CALLBACK
//* USE CALLBACK IF NEED IMPROVE MEMORY ALLOCATION AND EXECUTION TIME
/* import fs from "node:fs"; */

//? READ SYNC
//! READ all the file before to do something else
/* const content = fs.readFileSync("./index.html", "utf-8");
console.log(content); */

//? READ ASYNC
/* fs.readFile("./index.html", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

//? WRITE A FILE ASYNC
fs.writeFile("./hello.txt", "Hello world", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
}); */

//?{ flag: "a" }: permet de rajouter le contenu au fichier existant
/* setTimeout(() => {
  fs.writeFile("./hello.txt", " it's me", { flag: "a" }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file written");
    }
  });
}, 1000); */
