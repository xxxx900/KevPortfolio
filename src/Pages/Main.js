import React from 'react';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            achievements: [
                {
                    tags: ['Side Project'],
                    achievement: 'Java Time Table(Side Project)',
                    description: 'This was created made with Java in 2015. The first project after starting the program in college',
                    youtube_video_id: '4jzWydO48Sk',
                },
                {
                    tags: ['Side Project'],
                    achievement: 'Project try-out(Side Project)',
                    description: 'This was created made with Project in 2015. It implements Socket network in order for the program to interact with each other.',
                    youtube_video_id: 'mdjL3CAXTjM',
                },

                {
                    tags: ['Side Project'],
                    achievement: 'Three Dynasty worriors (Turn RPG Game)(Side Project)',
                    description: 'This was created made with Java in 2015. This fails due to the lack of the effort. It implements Java Swing so the program can run with better UI/UX.',
                    youtube_video_id: 'L2_iFPGsdYA',
                },
                {
                    tags: ['Side Project'],
                    achievement: 'AR application development(Side Project)',
                    description: 'This was created made with Java in 2016. The demonstration only contains the flow of the application. It attempts to add more entertainments to travelers utilizing AR.',
                    youtube_video_id: 'X7k4PPdRWow',
                },

                {
                    tags: ['Side Project'],
                    achievement: 'Big Data Crawler',
                    description: 'This was created made with Java in 2017. The project failed in the end due to the lack of machine learning datasets. And the data was collected through web crawler.',
                    youtube_video_id: 'ODpR4iyVdMY',
                },                
            ],
        };
        const myAchievements = this.state.achievements.map(achieve => {
            return [<h1>{achieve.achievement}</h1>, <p>{achieve.description}</p>]
        });
    }

    render() {
        return (
            <div className="MainPage">
                {
                    this.state.achievements.map(achieve => {
                        let returnArr = [<h1>{achieve.achievement}</h1>, <p>{achieve.description}</p>];
                        if (achieve.youtube_video_id) {
                            let youtubeLink = 'https://www.youtube.com/watch?v=' + achieve.youtube_video_id;
                            let youtubeEmbedLink = 'https://www.youtube.com/embed/' + achieve.youtube_video_id;
                            returnArr.push(<a href={youtubeLink}>Link</a>);
                            returnArr.push(<iframe width="560" height="315" src={youtubeEmbedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>);
                        }
                        return returnArr;
                    })
                                
                }
            </div>
        )
    }

}
export default MainPage;
