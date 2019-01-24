import React, {Component} from 'react';
import './Services.css'

class Services extends Component {
render() {
    return (
        <div className="services">
            <h3>Languages</h3>
            <h2>What I Know</h2>
            <div className="row">
                <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description} />
                <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description} />
                <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description} />
                <Icons myIcon={iconObj[3].icon} myTitle={iconObj[3].title} myDescription={iconObj[3].description} />
            </div>
        </div>
    );
}
}

const iconObj = [
    {
        icon: <i class="devicon-ruby-plain colored"></i>,
        title: 'Ruby',
        description: 'Learnt in coding bootcamp utilising in the Rails Framework.'
    },
    {
        icon: <i class="fas fa-pencil-alt"></i>,
        title: 'Elixir',
        description: 'Learnt for my internship turned contract with Vamp.'
    },
    {
        icon: <i class="devicon-javascript-plain colored"></i>,
        title: 'Javascript',
        description: 'Learnt in coding bootcamo utilising the MERN development stack.'
    },
    {
        icon: <i class="devicon-csharp-plain colored"></i>,
        title: 'C#',
        description: 'Learnt in Bachelor of Game development and only know in regards to game dev at this time.'
    }
]

class Icons extends Component {
    render() {
        return (
            <div>
            <span>{this.props.myIcon}</span>
            <h4>{this.props.myTitle}</h4>
            <p>{this.props.myDescription}</p>
        </div>
        )
    }
}

export default Services;
