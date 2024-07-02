const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};


async function connectToDb() {
    try {
      // Read the MongoDB URL from the environment variables
      const mongoUrl = process.env.MONGODB_URL;
  
      // Check if the URL is defined
      if (!mongoUrl) {
        throw new Error("MONGODB_URL environment variable is not defined.");
      }
  
      // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
      await mongoose.connect(mongoUrl, clientOptions);
      await mongoose.connection.db.admin().command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } catch (error) {
      console.log(error);
    }
  }

module.exports = connectToDb;
