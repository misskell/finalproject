import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './header.css';
import logoimg from './img/logo.png';

class header extends React.Component {
constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
        collapsed: true,
    };
}

toggleNavbar() {
    this.setState({
    collapsed: !this.state.collapsed,
    });
    }

    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <div>
                {/* Nav Bar Start */}
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <img style={{width: '50px', marginLeft: '2%'}} src={logoimg} alt />
                    <Link style={{color: 'white', marginLeft: '2%'}} to={'/'} className="navbar-brand">Swap Nation</Link>
                    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className={`${classOne}`} id="navbarResponsive">
                        
                        <form className="form-inline ml-auto my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link style={{color: 'white'}} to={'/my-account'} className="nav-link">Account</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color: 'white'}} to={'/calendar'} className="nav-link">Calendar</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color: 'white'}} to={'/aboutus'} className="nav-link">About Us</Link>
                            </li>                            
                            <li className="nav-item">
                                <Link style={{color: 'white'}} to={'/blog'} className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{color: 'white'}} to={'/contactus'} className="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* Nav Bar End */}
            </div>
        );
    }
}

export default header;