import React, { Component } from 'react';
import './Projects.css';
import {Grid} from '@material-ui/core'
import CustomCard from './cards'

class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <h3>Luke's Amazing</h3>
                <h2>Projects</h2>

                <Grid container>
                    <Grid item xs={12} md={4}>
                        <CustomCard 
                            image={require ('./img/bbb.PNG')} 
                            title={'Buy Buy Business'} 
                            contentBody={'A Ruby on Rails app that was a solo project for coding bootcamp'}
                            githubLink={'https://github.com/BestLuke/BuyBuyBusiness'}
                            webLink={'https://buy-buy-business.herokuapp.com/'}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CustomCard
                            image={require ('./img/ww.jpeg')}
                            title={'Wonky Warriors'}
                            contentBody={'A Unity Game that was a group project for Game Design Degree'}
                            githubLink={'https://gitlab.com/LFraser/WonkyWarriors'}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CustomCard
                            image={require ('./img/bank.PNG')}
                            title={'Bank App'}
                            contentBody={'A personal terminal app experimenting with ruby which I made during my coding bootcamp'}
                            githubLink={'https://github.com/BestLuke/bankappV2'}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
};

export default Projects;