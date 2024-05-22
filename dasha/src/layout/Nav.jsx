import React from "react";
import logoIcon from "../images/logo.svg";
import Prod from "../pages/Prod";
import About from "../pages/About";
import Serv from "../pages/Serv";
import {BrowserRouter as Router,Route,Routes,NavLink} from "react-router-dom";
import calcIcon from "../images/calculation.svg";
import measIcon from "../images/measering.svg";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <Router>
            <header className={styles.navb}>
                <div className={styles.logo}>
                    <img src={logoIcon} alt="" />
                </div>
                <nav className={styles.navLinks}>
                    <NavLink to="/Serv">Услуги</NavLink>
                    <NavLink to="/Prod">Продукты</NavLink>
                    <NavLink to="/about">О нас</NavLink>
                </nav>
                <div className={styles.buttons}>
                    <button className={styles.reqBut}>
                        <img src={measIcon} alt="" />
                        Make request
                    </button>
                    <button className={styles.calcBut}>
                        <img src={calcIcon} alt="" />
                        Calculation
                    </button>
                </div>
            </header>
            <Routes>
                <Route path="/Serv" element={<Serv />} />
                <Route path="/Prod" element={<Prod />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Serv />} />
            </Routes>
        </Router>
    );
};

export default Nav;
