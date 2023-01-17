const express = require("express");
const cors = require("cors");
const session = require("express-session");
const path = require("path");

require("dotenv").config();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
const corsOptions = {
  origin: "http://example.com",
};
const configuredCors = cors(corsOptions);

app.options("*", configuredCors);

app.post("/", configuredCors, (req, res) => {
  console.log(req.body);
  res.send("Hello");
});
//Middleware
app.set("view engine", "ejs");

// Body parsing middleware
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

// set location from which to pull static files
app.use(express.static("static"));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Server connection.
app.listen(PORT, () => {
  console.log(`🌎 ==> Server is now listening on port ${PORT}!`);
});
