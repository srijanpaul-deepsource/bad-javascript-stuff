import express from "express";
import { Client } from "pg";
import { initializeApp } from "firebase/app";
import mysql from "mysql";

const app = express();

app.get("/resource", (req, res) => {
  const cookieValue = "user-query:" + req.query;
  res.setHeader("Set-Cookie", cookieValue);
});

const pgClient = new Client({
  /* ... */
});

app.get("/resource", async (req, _res) => {
  const query = "select * from user where name = " + req.query.name;
  const result = await pgClient.query(query);
  console.log(result);
});

const firebaseApp = initializeApp({
  apiKey: "<YOUR_API_KEY_AS_A_STRING_LITERAL>",
  // ^ This setting here may be exposed in error message stack traces etc.
  appId: "1:2729...",
  projectId: "firebase-project",
  databaseURL: "https://<app>.firebaseio.com",
  // ...
});

const conn = mysql.createConnection({
  host: "<url>",
  user: "bob",
  password: "ABc-07",
});


const rSpaces = /\\x1a/;

switch (color) {
   case 'red' : handle_red(color); break;
   case 'blue' : handle_red(color);
   INDIGO: handle_indigo(color);
 }

function mult(a, b, c) {
   return a * b * c;
 }

mult(1, 2, 3, 4); // '4' will be ignored, and the result will be '6'.

export default { firebaseApp, conn, rSpaces };

