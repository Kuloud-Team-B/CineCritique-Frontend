import React from 'react';
import styles from './signin.module.css';
//import { symbol } from 'prop-types';


const Signin = () => {
    return (
        <div className={styles.rootsignin}>
            <div className={styles.title}> 한글... </div> 
        </div>
    );
};

export default Signin;


/*

import React from 'react';
import { set, useForm } from 'react-hook-form';

const {
    register, /*필수 입력란, 유효성 검사 등 등록
    handleSubmit,
    formState: { errors },
    setError,
} = useForm();

const onValid = async (data) => {
    const { id, email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
        await setError('passwordchk', { message: '비밀번호가 일치하지 않습니다.'})
    }
}
*/