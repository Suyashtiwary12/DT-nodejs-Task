const express = require("express");
const router = require("./routes/function.route"); 
const app = express();
const { MongoClient } = require("mongodb");
require("dotenv").config();

const port = process.env.PORT;
const dbUrl = process.env.DB_CONNECT_URL;

app.use(express.json());
app.use("/api/v3/app", router);

let db; 

async function main() {
  const client = new MongoClient(dbUrl);
  
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db("testDB"); 
    global.db = db;
  } catch (err) {
    console.error("Error:", err);
  } 
}

app.listen(port, () => {
  main();
  console.log("Server is running");
});
