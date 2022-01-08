//jshint eversion:6

const express = require("express");
const app = express();

app.get("/",function (req, res) {
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function (req, res) {
    res.send("contact me at : abcd@gmail.com");
});

app.get("/about", function (req, res){
    res.send("Hello! My name is Shubham.");
});

app.get("/hobbies", function (req, res){
    res.send("My hobbies are playing chess, badminton and coding.");
})

app.listen(3000,function(){
    console.log("Server started at port 3000");
});