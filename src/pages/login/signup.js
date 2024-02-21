import React, { Component } from 'react';
//import {Link, Routes, Route} from 'react-router-dom';
//sign in 페이지로 이동

/*
- react hook form으로 유효성 검사 코드 추가 예정
- 재사용할 컴포넌트 수정 예정*/
import styles from './signup.module.css';
import logo from '../../assets/img/cineCritique_logo4.png';
import classes from './button.module.css';

class Signup extends Component{
    render() {
        return (
        <div className={styles.rootsignup}>
                <img src={logo} className={styles.logo} alt='logo'></img>
                <div className={styles.tablet}>
                    <div className={styles.text}>회원가입</div> 
                    <form className={styles.form}>    
                        <div className={styles.text}>아이디</div>
                        <input type='text' name='id'  className={styles.idB} size='25' maxLength='20'></input> 
                        <div className={styles.text}>이메일</div>
                        <input type='text' name='email' className={styles.emailB} size='25' maxLength='40'></input>                            
                        <div className={styles.text}>비밀번호</div>
                        <input type='password' name='pw' className={styles.pwB} size='25' maxLength='25'></input>
                        <div className={styles.text}>비밀번호 확인</div>
                        <input type='password' name='pw' className={styles.pwB} size='25' maxLength='25'></input>
                        <button className={classes.btn}>가입하기</button>          
                    </form>
                    <span className={styles.notice}>이미 계정이 있으신가요?</span>
                    <button className={styles.signin}>로그인</button> 
                </div>
        </div>
        );
};
}
export default Signup;