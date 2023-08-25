//? GET THE URL PARAMS OR QUERY URL

import querystring from "node:querystring";

let q = querystring.parse("http://localhost:8080/api&year=2017&month=february");
console.log(q.year, q.month);
