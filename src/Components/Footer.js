import React from "react";

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      blank: '_blank',
    }

  }

  render() {
    return (
      <div className="Footer">
        <ul>
          <li>
            <a href="https://github.com/xxxx900" target={this.state.blank}>
              <img width="30em" height="30em" src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU">
              </img>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/capkev/" target={this.state.blank}>
              <img width="30em" height="30em" src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw">
              </img>
            </a>
          </li>
        </ul>
        <p>
          This page is one-page website with help of React Js, Express Js, nginx.
        </p>
      </div>
    );
  }
}

export default Footer;
