import React from "react";
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <button>서비스 소개</button>
                    <button>카카오톡 문의</button>
                    <button className={styles.privacy}>개인정보처리방침</button>
                    <button>고객센터</button>
                    <button>게시물 신고</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
