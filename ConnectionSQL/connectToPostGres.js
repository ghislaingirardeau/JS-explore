/* import { Client } from "pg"; */
const { Client } = require("pg");

require("dotenv").config({ path: "../.env" });

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "ghislain",
  password: `${process.env.POSTGREPASSWORD}`,
});

const getData = async () => {
  try {
    await client.connect();
    let { rows } = await client.query(`SELECT id, name FROM "Users"`);
    console.table(rows);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Close the connection");
    await client.end();
  }
};

getData();

/* client
  .connect()
  .then((res) => {
    client
      .query(`SELECT id, name FROM "Users" LIMIT 100`)
      .then(({ rows }) => {
        console.log(rows);
      })
      .catch((e) => console.error(e))
      .finally(() => {
        console.log("Close the connection");
        client.end();
      });
  })
  .catch((e) => console.error(e)); */
