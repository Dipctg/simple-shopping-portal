import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/Home">Home</a>
                <a href="/My Budget">My Budget</a>
                <a href="/Deshboard">Deshboard</a>
            </nav>
            <h1>Durga puja shopping budget</h1>
            <h3>Budget 10000$</h3>
        </div >
    );
};

export default Header;