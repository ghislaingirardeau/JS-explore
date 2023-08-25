/* import { createReadStream } from "fs"; */
import { createServer } from "http";
import https from "https";
import { json } from "stream/consumers";
import url from "node:url";
import { readFileSync, createReadStream } from "fs";

const server = createServer(async (req, res) => {
  //* to write inside the headers
  //* minimum: staut code & content-type (ex: application/json or xml)
  //? RESPONSE TYPE HTML
  //* content-type = "text/html" send html code has response => it will show an HTML format
  res.writeHead(200, { "Content-Type": "text/html" });
  //! ex: send HTML content
  //res.end("<h1>Hello word</h1>");
  //! ex: send an HTML file in the response
  let dynamicName = `Ghislain`;
  let html = readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", dynamicName);
  res.end(html);
  //! ex: send with stream & pipe
  /* createReadStream("./index.html").pipe(res); */
  //? POST INSIDE REQ & SEND IT AS RESPONSE
  // pour récupérer le body d'une requete
  /* const body = await json(req);
  console.log(body);
  res.write(body.name); */
  /* res.end(body.name); */
  //? TO GET INFORMATION ABOUT THE URL WHICH SEND THE REQUEST
  /* let q = url.parse(req.url, true);
  console.log(q); */
  //? CREATE ROUTE ON SERVER
  /* //* send different content depending on the route and the method
  if (req.url === `/`) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === `/api` && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Api page with POST method");
  } else {
    res.writeHead(400);
    res.end("Page not found");
  } */
  //? CREATE A HTTP REQUEST, TO GET DATA FROM AN OTHER API
  /* https
    .request("https://jsonplaceholder.typicode.com/todos/1", (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data = data + chunk.toString();
      });
      res.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
      });
    })
    .end();
  res.end("Data is collected"); */
});

server.listen("8080", () => {
  console.log("server running on port 8080");
});
