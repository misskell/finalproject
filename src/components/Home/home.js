import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import backgroundImage from './landing_page.png';


const Home = () => {
    return (
        
        <div style={{backgroundImage: `url(${backgroundImage})`}} className="text-center Login-component">            
            <Link to={'/joinus'} style={{marginTop: '50vh'}} className="btn btn-secondary pl-5 pr-5">Join Us</Link>
        </div>
    );
};

export default Home;