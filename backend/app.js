const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

const saltRounds = 10;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

//connect to mongoDB server
const dbURL = "mongodb+srv://admin-prat33k:admin123@cluster0.4wyjr.mongodb.net/quickloan-users";
mongoose.connect(dbURL, (err)=>{
    if(err)
        console.log(err);
    else 
        console.log("Sucessfully connected to mongodb atlas");
});

const userSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

   

const User = new mongoose.model("User", userSchema);                // user database collection





app.get("/home", (req, res)=>{
    res.send("hello mf this is home route end point");
});
app.get("/secrets", (req, res)=>{
    res.send("vishal ki bandi hai lakshmi")
});


app.post("/register", (req, res)=>{

    console.log(req.body);

    bcrypt.hash(req.body.password, saltRounds, (err, hash)=>{      // take the req.body.password and hash it with salt saltRounds number of times

        const newUser = new User({
            userName: req.body.username,
            password: hash               // store the password's hash in DB
        });

        newUser.save((err)=>{
            if(err) {
                console.error(err);
                res.send("error occured");
            } else {
                res.send("welcome to the club");
            }
        });

    });

});

app.post("/login", (req, res)=>{


    const userName = req.body.username;
    const password = req.body.password;

    User.findOne({userName: userName}, (err, foundUser)=>{           // find username in db

        if(err || !foundUser) {
            console.error(err);
            res.send("no user found");
        } else {

            bcrypt.compare(password, foundUser.password, (err1, result)=>{    // checking password is correct or not
                if(err1) {
                    console.error(err1);
                    res.send("something went wrong !!");
                } else {

                    if(result === true) {
                        res.send("congrats, you have logged in");
                    } else {
                        res.send("Wrong password !!");
                    }

                }
            });

        }

    });

});


app.listen(process.env.PORT || 4000, ()=>{
    console.log("server is running at port 4000");
});
