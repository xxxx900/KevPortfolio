import React from 'react';

class MainPage2 extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="MainPage">
                <p>
                    Hi, my name is Kevin.
                </p>
                <p>
                    This website is to show what I'm interested in and have been doing in more detail.
                </p>
                <p>
                    Take a look and contact me in &nbsp;
                    <a href='https://www.linkedin.com/in/capkev/' target='_blank'>
                        Linkedin
                    </a>
                    &nbsp;
                    please!
                </p>
                <p>
                    Thanks.
                </p>

            </div>
        )
    }

}
export default MainPage2;
