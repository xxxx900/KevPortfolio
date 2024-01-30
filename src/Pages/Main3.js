import React, {useState, useEffect} from 'react';

function MainPage3(props){
    const [apiAchievementsDB, setApiAchievementsDB] = useState([]);

    function updateAchievementsDB(newAchieve){
        setApiAchievementsDB(newAchieve);
    }

    const fetchAchievementsDB = async () => {
        await fetch("https://kevkorcapaws.com/api/review/db")
        .then(res => res.json())
        .then(data => updateAchievementsDB(data));
    }    

    useEffect(() => {
        fetchAchievementsDB();
    }, [])

    return (
            <div className="ReviewPage">
                <div className="achievements">
                {
                    apiAchievementsDB.map(achieve => {
                        let returnArr = [
                        <h1>{achieve.achievement}</h1>,  <h2>{achieve.tags.join(', ')}</h2>, <p>{achieve.description}</p>
                        ];
                        return returnArr;
                    })
                }
                </div>
            </div>
        )

}
export default MainPage3;
