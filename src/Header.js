import React, { Component } from 'react';
import './Header.css';

import Background from './img/bg-masthead.jpg';

class Header extends Component {
    render() {
        const myStyles = {
            'backgroundImage': `url( ${Background} )`,
            'height': '50vh',
            'backgroundSize': 'cover'
        }
        return (
            <header style={myStyles}>
                <h1>
                    {this.props.Title}
                </h1>
                <p>
                    A catalouge of works by the amazing Luke Fraser
                </p>
                <a href='https://github.com/BestLuke' target={'blank'}>
                    {this.props.Button}
                </a>
            </header>
        );
    }
};

export default Header;