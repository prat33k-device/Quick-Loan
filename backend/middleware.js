require("dotenv").config();
const jwt = require("jsonwebtoken");

//custom express middleware which will sit in between a request and a protected route and verify if the request is authorized
//middleware function will look for the token in the cookies from the request and then validate it
const withAuth = (req, res, next)=> {
    const token = req.cookies.token;

    if(!token) {
        res.status(401).send("Unauthorized: No token provided");
    } else {
        jwt.verify(token, process.env.SECRET, (err, decoded)=>{

            if(err) {
                console.log(err);
                res.status(401).send("Unauthorized: No token provided");
            } else {
                req.username = decoded.username;   // doubt
                next();
            }

        });
    }
};

module.exports = withAuth;