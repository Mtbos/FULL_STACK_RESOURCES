import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/Home", (req, res) => {
  res.render("index");
});
app.get("/post", (req, res) => {
  res.render("post");
});
app.post("/post", (req, res) => {
  const { title, content } = req.body; // Extract data from form submission

  // Implement logic to save the blog post (e.g., to a database)
  // Send a success message or redirect to a confirmation page
  res.status(200).send("Blog posted successfully! Redirecting...");

  // Clear the form data on the server-side (optional, depends on preference)
  // req.body.title = '';
  // req.body.content = '';

  // Redirect back to the post form route (essential for clearing form)
  res.redirect("/post");
});

app.get("/AboutUs", (req, res) => {
  res.render("AboutUs");
});
app.get("/ContactUs", (req, res) => {
  res.render("ContactUs");
});

app.listen(port);
