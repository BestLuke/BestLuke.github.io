import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import Projects from './Projects';
import * as serviceWorker from './serviceWorker';

class App extends Component {
    render(){
        return (
            <div>
                <Navigation LogoTitle="Luke Fraser" />

                <Header Title="Luke Fraser" Button="Github"/>

                <Services />

                <Projects />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
