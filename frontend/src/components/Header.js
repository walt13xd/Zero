import React, { Component } from 'react';
import { NavLink, Route, Router } from 'react-router-dom'

class Header extends Component {
    
    render(){
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">
                    <div className="navbr-item">
                        Content
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;