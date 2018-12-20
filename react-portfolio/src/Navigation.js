import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
      const section=['Home', 'About', 'services', 'Portfolio', 'Contact'];
      const navLinks = section.map( section => {
        return (
            <li><a href={'#' + section}>{section}</a></li>
        )
      });
    return (
        <nav>
            <h2 className='logo'>{this.props.LogoTitle}</h2>
            <ul>
                {navLinks}
            </ul>
        </nav>
    );
  }
}

export default Navigation;
