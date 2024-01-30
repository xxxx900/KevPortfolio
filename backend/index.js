// Imports, requires
const cors = require('cors');
const express = require('express');
const app = express();
const achievementsRouter = require('./routes/achievements');
const reviewsRouter = require('./routes/reviews');

//Constant values
const portNumber = 8000;


// (TODO:Cors needs to be changed, only opened for 8000.)
app.use(cors({origin:"https://kevkorcapaws.com"}));
app.use(logger);
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.get("/api", [logger], (req, res) => {
    const responseString = {
        msg: 'Express API Server',
    };
    res.send(JSON.stringify(responseString));
});

app.use("/api/achievements", achievementsRouter);
app.use("/api/reviews", reviewsRouter);

app.listen(portNumber, () => { // listen call back
    console.log(`[Server]: Server is listening to http://localhost:${portNumber}`);
});


// middleware logger
function logger(req, res, next){
    console.log('Request URL: ', req.originalUrl);
    console.log('Request Path: ', req.path);
    next(); // next should be declared for the next function to run asynchronosly.
}
