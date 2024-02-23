import React, {  useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//import axios from 'axios';
import styles from './signup.module.css';
import logo from '../../assets/img/cineCritique_logo4.png';
import classes from '../../components/button/loginbtn.module.css';

/*
- 이메일로 중복 회원가입 방지 기능 추가할지 고민 
- axios로 스프링이랑 통신하는 기능 추가할 예정
*/

const Signup = () => {  
    const {
        register,
        watch,
        handleSubmit,
        formState: { isValid, errors }
    } = useForm({
        mode: 'onChange'
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    const pw = useRef({});
    pw.current = watch('pw', '');
    const validatePassword = (value) => {
        if (value !== pw.current) {
            return false;
        }
        return true;
    };
    const navigate = useNavigate();
    const gotoSignin = () => {
        navigate('/Signin');
    }

    return (
        <div className={styles.rootsignup}>
                <img src={logo} className={styles.logo} alt='logo'></img>
                <div className={styles.tablet}>
                    <div className={styles.text}>회원가입</div>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>    
                        <div className={styles.formcon}>
                            <div className={styles.text}>아이디</div>
                            <input type='text' name='id' className={styles.idB} maxLength={12}                                
                                {...register('id', {
                                    required: true, 
                                    pattern: /^[ㄱ-ㅣ가-힣a-zA-Z0-9][0-9a-zA-Zㄱ-ㅣ가-힣]{5,12}$/
                                })}>
                            </input>
                            {errors.id && errors.id.type === 'required' && (
                                <p className={styles.stext}>* 아이디를 입력하세요.</p>
                            )}
                            {errors.id && errors.id.type === 'pattern' && (
                                <p className={styles.stext}>* 6~12자의 한글, 영문, 숫자를 입력하세요.</p>
                            )}
                            
                        </div>
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
                                    required: true, 
                                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/
                                })}>
                            </input>
                            {errors.pw && errors.pw.type === 'required' && (
                                <p className={styles.stext}>* 비밀번호를 입력하세요.</p>
                            )}
                            {errors.pw && errors.pw.type === 'pattern' && (
                                <p className={styles.stext}>* 최소 1개 이상의 숫자와 영문 8~16자를 입력하세요.</p> 
                            )}
                        </div>
                        <div className={styles.formcon}>
                            <div className={styles.text}>비밀번호 확인</div>
                            <input type='password' name='pwc' className={styles.pwcB}
                            {...register('pwc', {
                                register: true,
                                validate: validatePassword
                            })}>
                            </input>
                            {errors.pwc && errors.pwc.type === 'register'  && (
                                <p className={styles.stext}>* 비밀번호를 다시 입력하세요.</p>
                            )}
                            {errors.pwc && errors.pwc.type === 'validate'  && (
                                <p className={styles.stext}>* 비밀번호가 일치하지 않습니다.</p>
                            )}
                        </div>
                        <div className={styles.formcon}>                        
                            <button type='submit' disabled={!isValid} className={classes.btn}>가입하기</button>          
                        </div>
                    </form>
                    <span className={styles.notice}>이미 계정이 있으신가요?</span>
                    <button className={styles.signin} onClick={gotoSignin}>로그인</button> 
                </div>
        </div>
    );
}

export default Signup;