const ApiFeatures = require("../utils/apifeatures");

const postfunc = async (req, res) => {
    try {
      if (!global.db) {
        return res.status(500).json({ error: "Database connection is not initialized" });
        }
        const { name, tagline ,schedule} = req.body; // you can give any number of inputs you want i have given two for example.
        const date = new Date();
      if (!name || !tagline||!schedule) {
        return res.status(400).json({ error: "All fields (name, tagline,schdule) are required" });
      }
      const collection = global.db.collection("testCollection");
      const result = await collection.insertOne({...req.body,date});
  
      res.status(201).json({ message: "User added successfully", userId: result.insertedId });
    } catch (error) {
      console.error("Error adding user:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
const getfunc = async (req,res) => {
    try {
        if (!global.db) {
          return res.status(500).json({ error: "Database connection is not initialized" });
        }
    
        const collection = global.db.collection("testCollection");
        const result = await collection.findOne(req.params._id);
    
        res.status(201).json({ result });
      } catch (error) {
        console.error("Error getting data:", error.message);
        res.status(500).json({ error: "Internal server error" });
      }
}
const getallfunc = async (req,res) => {
    try {
        if (!global.db) {
          return res.status(500).json({ error: "Database connection is not initialized" });
        }
    
        const collection = global.db.collection("testCollection");
        

        const data = new ApiFeatures(collection.find(), req.query).pagination(5);
        const result = await data.query;
    
        res.status(201).json({ result });
      } catch (error) {
        console.error("Error getting data:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
    
    
}

const putfunc = async (req, res) => {
    try {
        if (!global.db) {
            return res.status(500).json({ error: "Database connection is not initialized" });
        }
        const { name, tagline ,schedule} = req.body;
        const date = new Date();
        if (!name || !tagline||!schedule) {
        return res.status(400).json({ error: "All fields (name, tagline,schdule) are required" });
        }
        const collection = global.db.collection("testCollection");
        const find = await collection.findOne(req.params._id);
        const result = await collection.findOneAndReplace(find, {...req.body,date} );
  
      res.status(201).json({ message: "User added successfully", userId: result.insertedId });
    } catch (error) {
      console.error("Error adding user:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
};

const delfunc = async (req,res) => {
    try {
        if (!global.db) {
          return res.status(500).json({ error: "Database connection is not initialized" });
        }
    
        const collection = global.db.collection("testCollection");
        const result = await collection.deleteOne(req.params._id);
    
        res.status(201).json({ result });
      } catch (error) {
        console.error("Error adding user:", error.message);
        res.status(500).json({ error: "Internal server error" });
      }
}


module.exports = {postfunc,getallfunc,putfunc,delfunc,getfunc};
  