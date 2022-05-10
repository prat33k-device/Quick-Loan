require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
const withAuth = require("./middleware");

const saltRounds = 10;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
  });

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

app.get("/secrets", withAuth, (req, res)=>{
    res.send("This is a secret")
});

//ask our server if we have a valid token saved to our browser cookies
app.get("/checktoken", withAuth, (req, res)=>{
    res.sendStatus(200);
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


// sends token to brower that has to be stored as cookies
app.post('/api/authenticate', (req, res)=>{

    const userName = req.body.username;
    const password = req.body.password;
    console.log(userName + " " + password);

    User.findOne({userName: userName}, (err, foundUser)=>{           // find username in db

        if(err || !foundUser) {
            if(err)
                console.error(err);
            else
                res.send("no user found");
        } else {

            bcrypt.compare(password, foundUser.password, (err1, result)=>{    // checking password is correct or not
                if(err1) {
                    console.error(err1);
                    res.send("something went wrong !!");
                } else {

                    if(result === true) {
                        //authorized
                        //Issue Token

                        const payload = userName;
                        const token = jwt.sign(payload, process.env.SECRET)

                        res.cookie("token", token, {
                            httpOnly: true, 
                            expires: new Date(Date.now() + 8 * 3600000)  // token expireation
                        }).sendStatus(200);
                        
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
