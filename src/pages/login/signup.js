import React, { Component } from 'react';
//import {Link, Routes, Route} from 'react-router-dom';
//sign in 페이지로 이동

/*
- react hook form으로 유효성 검사 코드 추가 예정
- 재사용할 컴포넌트 수정 예정*/
import styles from './signup.module.css';
import logo from '../../assets/img/cineCritique_logo4.png';

class Signup extends Component{
    render() {
        return (
        <div className='rootsignup'>
            <div className={styles.root}>
                <img src={logo} className={styles.cineCritique_logo4} alt='logo' width='240px'></img>
                <div className={styles.tablet}>
                    <div className={styles.text}><h2> SIGN UP </h2></div> 
                    <form className={styles.form}>    
                        <div className={styles.text}>ID</div>
                        <input type='text' name='id'  className={styles.idB} size='25' maxLength='20'></input> 
                        <div className={styles.text}>Email</div>
                        <input type='text' name='email' className={styles.emailB} size='25' maxLength='40'></input>                            
                        <div className={styles.text}>Password</div>
                        <input type='password' name='pw' className={styles.pwB} size='25' maxLength='25'></input>
                        <div className={styles.stext}>* Passwords must be at least 8 characters.</div> 
                        <button className={styles.button}>Sign up</button>          
                    </form>
                    <span className={styles.notice}>Already have an account?</span>
                    <button className={styles.signin}>Sign in</button> 
                </div>
            </div>  
        </div>
        );
};
}
export default Signup;