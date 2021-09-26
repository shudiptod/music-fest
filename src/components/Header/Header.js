import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <h2>DIU Reborn Music Fest 2021</h2>
            <h4>Choose your favourite bands for the biggest music festival of 2021</h4>
            <h3>Your budget is <span className="budget">BDT 100,00,000</span></h3>
        </div>
    );
};

export default Header;