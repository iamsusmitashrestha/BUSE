const mongoose = require("mongoose");

require("dotenv").config();

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

//Import all models
require("./models/User");
require("./models/Category");
require("./models/Comment");
require("./models/Notification");
require("./models/Post");

// Start our app!
const app = require("./app");
app.set("port", process.env.PORT || 7000);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
