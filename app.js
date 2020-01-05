
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/Rubie_pool", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });


app.get("/", function(req, res){
  res.render("home")
});

  app.get("/about", function(req, res){
  res.render("about");
});

app.get("/products", function(req, res){
res.render("products");
});

app.get("/gallary", function(req, res){
res.render("gallary");
});

app.get("/contact", function(req, res){
res.render("contact");
});

app.get("/openAndClose", function(req, res){
res.render("openAndClose");
});

app.get("/serviceCalls", function(req, res){
res.render("serviceCalls");
});

app.get("/inShopService", function(req, res){
res.render("inShopService");
});

app.get("/weeklyService", function(req, res){
res.render("weeklyService");
});

app.get("/contactInShopS", function(req, res){
res.render("contactInShopS");
});

app.get("/contactPoolOpen", function(req, res){
res.render("contactPoolOpen");
});

app.get("/contactPoolClose", function(req, res){
res.render("contactPoolClose");
});

//Send it out
app.listen(3000, function() {
  console.log("Server started on port 3000!");
});
