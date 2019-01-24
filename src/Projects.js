import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <h3>Luke's Amazing</h3>
                <h2>Projects</h2>

                <div className='row'>
                    <span className="one" href="https://buy-buy-business.herokuapp.com/">
                        <h1>Buy Buy Business</h1>
                        <p>A Ruby on Rails app that was a solo project for coding bootcamp</p>
                    </span>
                    <span className="two" href="https://gitlab.com/LFraser/WonkyWarriors">
                        <h1>Wonky Warriors</h1>
                        <p>A Unity Game that was a group project for Game Design Degree</p>
                    </span>
                    <span className="three" href="https://github.com/BestLuke/bankappV2">
                        <h1>Bank app</h1>
                        <p>A personal terminal app experimenting with ruby during coding bootcamp</p>
                    </span>
                </div>
            </div>
        );
    }
};

export default Projects;