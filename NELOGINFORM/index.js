import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs"); // Set of the ejs

// Now set up of the static files
app.use(express.static("./public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, () => {
  console.log("Listening..");
});
