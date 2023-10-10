import React from 'react';
import '../../styles/header.css';
import {NavLink} from 'react-router-dom';

function Header() {
    return (        
        <header>
            <div className="container">
                <div className="batman-nav">
                    <nav className="navbar navbar-expand-lg">                    
                        <div className="logo">
                            <img src={process.env.PUBLIC_URL + '/assets/logos/logohome.png'} alt="logohome"/>
                        </div>                        
                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
                            <span className="navbar-toggler-icon"></span>                                
                            </button>                    
                            <div className="collapse navbar-collapse mean-menu" id="navBar">                         
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item"> 
                                        <NavLink to="/" className="nav-link">Home </NavLink>                
                                    </li>
                                    <li className="nav-item"> 
                                        <NavLink to="Game" className="nav-link">Game </NavLink>                
                                    </li>
                                    <li className="nav-item"> 
                                        <NavLink to="Eshop" className="nav-link">E-Shop </NavLink>                
                                    </li>
                                    <li className="nav-item"> 
                                        <NavLink to ="MonCompte" className="nav-link">Mon Compte </NavLink>                
                                    </li>
                                </ul>
                            </div>
                        </div>                                           
                    </nav>
                </div>
                <div className="brand-control">
                    <ul className="scroll-bar">
                        <li>
                            <img src={process.env.PUBLIC_URL + '/assets/logos/logo_bat_flèche.png'} alt="batman flèche"/>
                        </li>
                        <li className="social-icon">
                            <img src={process.env.PUBLIC_URL + '/assets/logos/icon_facebook.png'} alt="facebook icon"/>
                        </li>
                        <li className="social-icon">
                            <img src={process.env.PUBLIC_URL + '/assets/logos/icon_ig.png'} alt="instagram icon"/>
                        </li>
                        <li className="social-icon">
                            <img src={process.env.PUBLIC_URL + '/assets/logos/icon_tw.png'} alt="twitter icon"/>
                        </li>
                        <li>
                            <img src={process.env.PUBLIC_URL + '/assets/logos/logo_bat_flèche_2.png'} alt="batman flèche"/>
                        </li>
                    </ul>
                </div>        
            </div>
        </header>        
    )
}

export default Header;