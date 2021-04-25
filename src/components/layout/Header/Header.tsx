import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

class Header extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      navigationOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e: any) {
    e.preventDefault();

    this.setState({
      navigationOpen: !this.state.navigationOpen
    })
  }

  render() {
    return (
      <div className="header">
        <div className="header-main">
          <div
            className={`header-burger ${this.state.navigationOpen ? 'header-burger__open' : ''}`}
            onClick={this.toggleMenu}
          >
            <span className="header-burger-line-top">&nbsp;</span>
            <span className="header-burger-line-bottom">&nbsp;</span>
          </div>
          <div className="header-logo">
            <span className="header-logo-text">AppCards</span>
          </div>
        </div>
        <div className={`header-navigation ${this.state.navigationOpen ? 'header-navigation__open' : ''}`}>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="header-navigation-item__active"
                className="header-navigation-item">Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/cards"
                activeClassName="header-navigation-item__active"
                className="header-navigation-item">Cards</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
