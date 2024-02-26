import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//import axios from 'axios';
import styles from './signin.module.css';
import logo from '../../assets/img/cineCritique_logo4.png';
import classes from '../../components/button/loginbtn.module.css';
import klogo from '../../assets/img/kakao_login_large_wide.png';
import Footer from '../../layout/footer';


const Signin = () => {
    const {
        register,
        handleSubmit,
        formState: { isValid, errors }
    } = useForm({
        mode: 'onChange'
    });
    const onSubmit = (data) => {
        console.log(data);
    };
  
    const navigate = useNavigate();
    const gotoSignup = () => {
        navigate('/Signup');
    }


    return (
        <div className={styles.rootsignin}>
            <img src={logo} className={styles.logo} alt='logo'></img>
            <div className={styles.tablet}>
                <div className={styles.container}>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>    
                        <div className={styles.title}>로그인</div>
                        <div className={styles.formcon}>
                            <div className={styles.text}>이메일</div>
                            <input type='text' name='email' className={styles.emailB} maxLength={30}
                                {...register('email', {
                                    required: true,                                    
                                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,30}$/
                                })}>
                            </input>
                            {errors.email && errors.email.type === 'required' && (
                                <p className={styles.stext}>* 이메일을 입력하세요.</p>
                            )}
                            {errors.email && errors.email.type === 'pattern' && (
                                <p className={styles.stext}>* 이메일의 형식이 올바르지 않습니다.</p>
                            )}                            
                        </div>
                        <div className={styles.formcon}>
                            <div className={styles.text}>비밀번호</div>
                            <input type='password' name='pw' className={styles.pwB} maxLength={16}
                                {...register('pw', {
                                    required: true                              
                                })}>
                            </input>
                            {errors.pw && errors.pw.type === 'required' && (
                                <p className={styles.stext}>* 비밀번호를 입력하세요.</p>
                            )}
                        </div>
                        <div className={styles.formcon}>                        
                            <button type='submit' disabled={!isValid} className={classes.btn}>로그인</button>          
                        </div>     
                        <div className={styles.checkbox}>
                            <label htmlFor = 'check' className={styles.notice}>자동 로그인</label>
                            <input id = 'check' type='checkbox' className={styles.keep}></input>
                        </div>  
                    </form>
                    <div className={styles.line}></div>
                    <div className={styles.snscontainer}>
                        <img alt='카카오 로그인' src={klogo} className={styles.klogo}></img>          
                        <img alt='카카오 로그인' src={klogo} className={styles.klogo}></img>          
                        <img alt='카카오 로그인' src={klogo} className={styles.klogo}></img>          
                        <div className={styles.or}>또는</div>
                        <button onClick={gotoSignup} className={classes.btn}>회원가입</button>          
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Signin;

