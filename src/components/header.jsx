import React from "react"

import Logo from "../assets/img/logo.png"
import HeroBg from "../assets/img/hero-bg.png"
import Hero1 from "../assets/img/hero-1.png"

function Header() {
    return (
        <header id="header-wrap">
            <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
                <div className="container">
                    <a href="index.html" className="navbar-brand"><img src={Logo} alt=""/></a>       
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="lni-menu"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                            <li className="nav-item active">
                                <a className="nav-link" href="#hero-area">
                                Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#feature">
                                Feature
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">
                                Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#team">
                                Team
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">
                                Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolios">
                                Works
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonial">
                                Testimonial
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">
                                Blog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
      
            <div id="hero-area" className="hero-area-bg" style={{ backgroundImage: `url(${HeroBg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                        <div className="contents text-center">
                            <h2 className="head-title wow fadeInUp">We Discover, Design & Build Digital <br/> Presence of Businesses</h2>
                            <div className="header-button wow fadeInUp" data-wow-delay="0.3s">
                            <a href="#services" className="btn btn-common">Explore</a>
                            </div>
                        </div>
                        <div className="img-thumb text-center wow fadeInUp" data-wow-delay="0.6s">
                            <img className="img-fluid" src={Hero1} alt=""/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;