const mongoose = require("mongoose");

//

const dbURI =
  "mongodb+srv://mohdrizwan:vc1U3phJpRLs640L@cluster1.qdanenn.mongodb.net/?retryWrites=true&w=majority";
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
