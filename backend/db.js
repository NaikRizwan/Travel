const mongoose = require("mongoose");

//

const dbURI = "mongodb://127.0.0.1:27017/kashmir";
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Error handling
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Connection successful
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Export the connected mongoose instance
module.exports = mongoose;
