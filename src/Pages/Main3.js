import React, {useState, useEffect} from 'react';

function MainPage3(props){
    const [apiReviewsDB, setapiReviewsDB] = useState([]);

    function updateReviewsDB(newAchieve){
        setapiReviewsDB(newAchieve);
    }

    const fetchReviewsDB = async () => {
        await fetch("https://kevkorcapaws.com/api/reviews/db")
        .then(res => res.json())
        .then(data => updateReviewsDB(data));
    }    

    useEffect(() => {
        fetchReviewsDB();
    }, [])

    return (
            <div className="ReviewPage">
                <div className="achievements">
                {
                    apiReviewsDB.map(reviewStr => {
                        const review = JSON.parse(reviewStr);
                        let returnArr = [
                        <h1>{review.title}</h1>,  <h2>{review.tags.join(', ')}</h2>, <p>{review.description}</p>
                        ];
                        return returnArr;
                    })
                }
                </div>
            </div>
        )

}
export default MainPage3;
