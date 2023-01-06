const express = require('express');
const router = express.Router();

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

module.exports = router