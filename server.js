const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://abhishekpm15:abhishek@cluster0.kxm6tti.mongodb.net/MyDB",{useNewUrlParser:true,useUnifiedTopology:true})
const profile = {
    email: String,
    password:String
}
const Note = mongoose.model("Users",profile);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    let newProfile = new Note({
        email:req.body.email,
        password:req.body.content

    });
    newProfile.save();
    res.redirect("/");
})


app.listen(3000, function () {
  console.log("server is running");
});
