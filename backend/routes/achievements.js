const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const region = "us-east-1";
AWS.config.update({ region })
const tableName = 'Achievements'
const client = new AWS.DynamoDB.DocumentClient();

// const Values;

const achievementTag = {
    'sideProject': 'Side Project',
    'mainProject': 'Main Project',
}
const defaultAchievements = [
    {
        tags: [achievementTag.sideProject],
        achievement: 'Java Time Table(Side Project)',
        description: 'This was created made with Java in 2015. The first project after starting the program in college',
        youtube_video_id: '4jzWydO48Sk',
    },
    {
        tags: [achievementTag.sideProject],
        achievement: 'Project try-out(Side Project)',
        description: 'This was created made with Project in 2015. It implements Socket network in order for the program to interact with each other.',
        youtube_video_id: 'mdjL3CAXTjM',
    },
    {
        tags: [achievementTag.sideProject],
        achievement: 'Three Dynasty worriors (Turn RPG Game)(Side Project)',
        description: 'This was created made with Java in 2015. This fails due to the lack of the effort. It implements Java Swing so the program can run with better UI/UX.',
        youtube_video_id: 'L2_iFPGsdYA',
    },
    {
        tags: [achievementTag.sideProject],
        achievement: 'AR application development(Side Project)',
        description: 'This was created made with Java in 2016. The demonstration only contains the flow of the application. It attempts to add more entertainments to travelers utilizing AR.',
        youtube_video_id: 'X7k4PPdRWow',
    },
    {
        tags: [achievementTag.sideProject],
        achievement: 'Big Data Crawler',
        description: 'This was created made with Java in 2017. The project failed in the end due to the lack of machine learning datasets. And the data was collected through web crawler.',
        youtube_video_id: 'ODpR4iyVdMY',
    },
    {
        tags: [achievementTag.mainProject],
        achievement: 'Summit Works / contracted with Google',
        description: 'A web application built with Django(Python) for backend, Polymer(Javascript) for frontend, DB Cloud SQL. ' +
                     'The ETL pipeline between GCP and Plx. The application resides in Google Cloud Platform',
    },
    {
        tags: [achievementTag.mainProject],
        achievement: 'HCL America / contracted with Google',
        description: 'Proprietary : WebDevelopement ',
    },
    {
        tags: [achievementTag.sideProject],
        achievement: 'Python Clicker for FFxiv.',
        description: 'Very simple clicker. It finds a process through win32gui and click. A demo video is not available',
    },
    {
        tags: [achievementTag.sideProject],
        achievement: 'Python Reddit Bot',
        description: 'It writes posts on wanted subreddit. It utilizes the Selenium/Tkinter A demo video is not available',
    },    
    {
        tags: [achievementTag.mainProject],
        achievement: 'Motiviti Labs / contracted with Google',
        description: 'Create a web application utilizing AppMaker(Javascript for frontend and backend). The project resides in Google Cloud Platform. DB: Cloud SQL',
    },
]
const params = {
    TableName: tableName
}

// "/achievements/" will return list of achievements.
router.get("/", (req, res) => {
    res.send(JSON.stringify(defaultAchievements));
})
    .post("/", (req, res) => {

    });


// "/achievements/db" will return list of achievements.
router.get("/db", (req, res, next) => {
    client.scan(params, (err, data) => {
        if(err){
            next(err);
        } else {
            const stringified_data = data.Items.map(ele => JSON.stringify(ele))
            res.send(JSON.stringify(stringified_data))
        }
    })
});

module.exports = router