//? WORK WITH FOLDER AND FILES

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//! Use dirname and filename rather than ./

//* GET THE LAST FILE RUN IN OR THE DIR WHERE WE ARE

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

//* GET THE EXTENSION OF THE FILE

console.log(path.extname(__filename));

//* GET DETAIL ON THE ACTUAL FILE

console.log(path.parse(__filename));

//* TO CREATE A PATH TO A CERTAIN DIRECTORY
//* EXAMPLE: WHEN DON'T KNOW THE CURRENT DIRNAME PATH
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join(__dirname, "index.html"));
console.log(path.resolve(__dirname, "../index.html"));
