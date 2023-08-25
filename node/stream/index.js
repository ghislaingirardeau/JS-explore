//? POUR CREER UN STREAM ex: pour les fichiers lourd au fur et à mesure
//? Stream is a sequence of data (chunk) that being moved
//? Si on transfere le contenu d'un fichier A à un fichier B, nous n'avons
//? pas besoin d'attendre que tout le contenu de A soit temporairement enregistrer
//? dans la mémoire avant le transfère vers B

import { createReadStream, createWriteStream } from "fs";
import { stat } from "fs/promises";
import zlib from "node:zlib";

//? COMPRENDRE LE CHUNK
/* const readableStream = createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2, // to show the split of the chunk in the number of bytes
});
readableStream.on("data", (chunk) => {
  console.log(chunk);
  const writeableStream = createWriteStream("./file2.txt");
  writeableStream.write(chunk);
}); */

//* POUR LIRE LE STREAM
const readStreamFile = async () => {
  //! permet d'avoir le détail d'un fichier
  const fileDetails = await stat("./VID_20190411_163152.mp4");
  console.log(fileDetails.size);

  const writeableStream = createWriteStream("./copy.mp4");

  const stream = createReadStream("./VID_20190411_163152.mp4");
  let read = 0;
  stream.on("data", (chunk) => {
    read += chunk.length;
    let progress = read / fileDetails.size;
    console.log(progress);
    writeableStream.write(chunk);
  });
  stream.on("end", () => {
    console.log("There will be no more data.");
  });
  stream.on("close", () => {
    console.log("Steam is closed");
  });
};
/* readStreamFile(); */

//? USE PIPE
//* POUR COPIER UN STREAM ex: si on copie une vidéo d'un disque rapide à un disque lent
const readAndWriteStream = async () => {
  const readStream = createReadStream("./VID_20190411_163152.mp4");
  const writeStream = createWriteStream("./copy.mp4");
  //! pipe connect les 2 streams pour les faire exécuter en même temps
  //! et au fur et a mesure

  readStream.pipe(writeStream);
};
/* readAndWriteStream(); */

//? USE ZLIB
//? Allowed to work with zip and create zip folder
//? To show that you can chain PIPE
const readZipAndWriteStream = async () => {
  const gzip = zlib.createGzip();
  const readStream = createReadStream("./file.txt");
  const writeStream = createWriteStream("./file2.txt.gz");

  readStream.pipe(gzip).pipe(writeStream);
  //! it gonna write the file wrapped inside a zip folder
};

/* readZipAndWriteStream(); */
