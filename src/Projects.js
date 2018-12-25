import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <h3>Luke's Amazing</h3>
                <h2>Projects</h2>

                <div className='row'>
                    <span className="one" href="https://buy-buy-business.herokuapp.com/businesses?direction=asc&sort=business_name">
                        <h1>Example 1</h1>
                        <p>This is example 1</p>
                    </span>
                    <span className="two">
                        <h1>Example 2</h1>
                        <p>This is example 2</p>
                    </span>
                    <span className="three">
                        <h1>Example 3</h1>
                        <p>This is example 3</p>
                    </span>
                    <span className="four">
                        <h1>Example 4</h1>
                        <p>This is example 4</p>
                    </span>
                </div>
            </div>
        );
    }
};

export default Projects;