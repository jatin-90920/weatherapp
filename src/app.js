const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || 8000;
const hbs = require("hbs");

// Serve static site 
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
// console.log(static_path);

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

// Create Routing 
app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/weather", (req, res)=>{
    res.render("weather");
});

app.get("*", (req, res)=>{
    res.status(404).render("404");
});

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`);
})