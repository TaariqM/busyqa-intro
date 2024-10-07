const mongoose = require("mongoose");
const User = require("./user");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/myappdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", async () => {
  // Create a new user instance
  const newUser = new User({
    name: "John Doe",
    email: "john@example.com",
    age: 30,
  });

  try {
    // Save the user to the database using async/await
    await newUser.save();
    console.log("User saved successfully");
  } catch (error) {
    console.log("Error saving user: ", error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
});
