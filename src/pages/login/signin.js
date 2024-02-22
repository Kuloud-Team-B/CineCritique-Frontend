import React from 'react';

//import { useForm } from 'react-hook-form';

import styles from './signin.module.css';




const Signin = () => {
    return (
        <div className={styles.rootsignin}>
            <img className={styles.logo} alt='logo'></img>
            <div className={styles.tablet}>
                <div className={styles.title}>로그인</div>
                <form className={styles.form}>

                </form>
            </div>
        </div>
    );
};

export default Signin;

