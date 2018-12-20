import React, {Component} from 'react';
import './Services.css'

class Services extends Component {
render() {
    return (
        <div className="services">
            <h3>Services</h3>
            <h2>What We Offer</h2>
            <div className="row">
                <div>
                    <span>
                        <i class="fas fa-mobile-alt"></i>
                    </span>
                    <h4>Responsive</h4>
                    <p>Look great on my screen size!</p>
                </div>
                <div>
                    <span>
                        <i class="fas fa-pencil-alt"></i>
                    </span>
                    <h4>Redesigned</h4>
                    <p>Freshly redisigned for bootstrap 4</p>
                </div>
                <div>
                    <span>
                        <i class="fas fa-thumbs-up"></i>                        
                    </span>
                    <h4>Favourited</h4>
                    <p>Millions of users <i class="fas fa-heart"></i> Start using Bootstrap</p>
                </div>
                <div>
                    <span>
                        <i class="fas fa-brain"></i>
                    </span>
                    <h4>Question</h4>
                    <p>Pick my Brain</p>
                </div>
            </div>
        </div>
    );
}
}

export default Services;
