const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient();
const tableName = 'Reviews'
const params = {
    TableName: tableName
}

// const Values;

const reviewTag = {
    'books': 'Book',
    'games': 'Game',
}

const defaultReviews = [
    {
        tags: [reviewTag.sideProject],
        title: 'Java Time Table(Side Project)',
        description: 'This was created made with Java in 2015. The first project after starting the program in college',
    },
]


// "/achievements/" will return list of achievements.
router.get("/", (req, res) => {
    res.send(JSON.stringify(defaultReviews));
})
    .post("/", (req, res) => {
        
    });

router.get("/db", (req, res, next) => {
    client.scan(params, (err, data) => {
        if(err){
            next(err);
        } else {
            const stringified_data = data.Items.map(ele => JSON.stringify(ele))
            res.send(JSON.stringify(stringified_data))
        }
    })
})
    .post("/db/", (req, res) => {
        
    });
    
    
module.exports = router