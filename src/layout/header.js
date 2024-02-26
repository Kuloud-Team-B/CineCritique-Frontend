import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import slogo from '../assets/img/C_logo.png';
import { SlMenu } from "react-icons/sl";
import { GoBellFill } from "react-icons/go";
import { BiSolidUser } from "react-icons/bi";

const Header = () => {
    const navigate = useNavigate();
    const gotoHome = () => {
        navigate('/Mainpage');
    }
    const gotoMypage = () => {
        navigate('/Myinfo');
    }

    return (
        <header className={styles.container}>
            <div className={styles.leftwrapper}>
                <SlMenu className={styles.icon} size={20}/>
                <img src={slogo} alt='logo' className={styles.logo} onClick={gotoHome}></img>
            </div>
            <div className={styles.rightwrapper}>
                <GoBellFill className={styles.icon} size={20}/>
                <BiSolidUser className={styles.icon} onClick={gotoMypage} size={22} />
            </div>
        </header>
    )
}

export default Header;