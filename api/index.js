const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// dotenv.config();

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
//   console.log("Connected to MongoDb");
// });

mongoose
  .connect("mongodb://localhost:27017/social", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  //"mongodb+srv://cholayya:ch0l@yya@student-data-gafig.mongodb.net/test?retryWrites=true&w=majority"
  .then(() => console.log("monogdb connected"))
  .catch((err) => console.log(err.message));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;
//const hostname = "127.0.0.1";

// app.listen(5000, () => {
//   console.log("Backend server is running!");
// });
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
