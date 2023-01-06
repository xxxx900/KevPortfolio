import React, {useState, useEffect} from 'react';

function MainPage(props){
    const [apiAchievements, setApiAchievements] = useState([]);
    
    const fetchAchhievements = async () => {
        await fetch("https://kevkorcapaws.com/api/achievements/")
        .then(res => res.json())
        .then(data => updateAchievements(data));
    }

    function updateAchievements(newAchieve){
        setApiAchievements(newAchieve);
    }

    useEffect(() => {
        fetchAchhievements();
    }, [])

    return (
            <div className="MainPage">
                {
                    apiAchievements.map(achieve => {
                        let returnArr = [
                        <h1>{achieve.achievement}</h1>,  <h2>{achieve.tags.join(', ')}</h2>, <p>{achieve.description}</p>
                        ];
                        if (achieve.youtube_video_id) {
                            // let youtubeLink = 'https://www.youtube.com/watch?v=' + achieve.youtube_video_id;
                            let youtubeEmbedLink = 'https://www.youtube.com/embed/' + achieve.youtube_video_id;
                            // Users can access youtube link through embedded link. Don't use link.
                            // returnArr.push(<a href={youtubeLink}>Link</a>);
                            returnArr.push(<iframe width="560" height="315" src={youtubeEmbedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>);
                        }
                        return returnArr;
                    })
                                
                }
            </div>
        )

}
export default MainPage;
