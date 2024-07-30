const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDb = require("../src/database/connectToDB.js");

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

const contactRoutes = require("../src/router/contactRoutes.js");

const app = express();

// CORS configuration
app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: "Content-Type, Authorization",
  })
);


// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));

// Routes
app.use("/api/contact", contactRoutes);

app.get("/",(req,res)=>{
  res.send("<h1>Arpit Jaiswal Portfolio</h1>")
})


// Connect to MongoDB
connectToDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at PORT : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!", err);
  });

