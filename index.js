const express = require("express");
const router = require("./routes/function.route"); 
const app = express();
const { MongoClient } = require("mongodb");

app.use(express.json());
app.use("/api/v3/app", router);

let db; 

async function main() {
  const client = new MongoClient("mongodb+srv://suyashtonystark:testpass@cluster0.yhoqsps.mongodb.net/new");
  
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db("testDB"); 
    global.db = db;
  } catch (err) {
    console.error("Error:", err);
  } 
}

app.listen(4050, () => {
  main();
  console.log("Server running at http://localhost:4050");
});
