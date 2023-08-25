import readline from "node:readline";
import fs from "node:fs";

var myInterface = readline.createInterface({
  input: fs.createReadStream("../index.html"),
});

var lineno = 0;
myInterface.on("line", function (line) {
  lineno++;
  console.log("Line number " + lineno + ": " + line);
});
