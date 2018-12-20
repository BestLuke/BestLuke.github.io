import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state={};

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }

    componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top ? document.body.style.paddingTop = `${this.state.height}px` : document.body.style.paddingTop = 0;
    }

  render() {
      let classes;
      function handleScroll() {
          if(window.scrollY > 0) {
              console.log("scrolled");
              classes = 'fixed-nav';
              console.log(classes)
          }
      }
      window.addEventListener('scroll', handleScroll);

      const section=['Home', 'About', 'services', 'Portfolio', 'Contact'];
      const navLinks = section.map( section => {
        return (
            <li><a href={'#' + section}>{section}</a></li>
        )
      });
    return (
        <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
            <h2 className='logo'>{this.props.LogoTitle}</h2>
            <ul>
                {navLinks}
            </ul>
        </nav>
    );
  }
}

export default Navigation;
