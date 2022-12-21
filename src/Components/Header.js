import React from "react"
import { Outlet, Link } from "react-router-dom";
// import MainPage from '../Pages/Main';
// import MainPage2 from '../Pages/Main2';
// import MainPage3 from '../Pages/Main3';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      headerClicked : 0,
    };    
  }

  render() {
    return (
      <div className="Header">
        <nav>
          <ul>
            <li>
              <Link to="/main1">
                Achievements
              </Link>
            </li>
            <li>
              <Link to ='/main3'>
                Reviews
              </Link>
            </li>
            <li>
              <Link to='/main2'>
                About K
              </Link>
            </li>
        </ul>
        </nav>
        {/* <Outlet/> */}
          {/* <ul>
            <li>
              <a href='/'>
                Menu 1
              </a>
            </li>
            <li>
              <a href='/'>
                Menu 2
              </a>
            </li>
            <li>
              <a href='/'>
                Menu 3
              </a>
            </li>
        </ul> */}
      </div>
    );
  }
}

export default Header;