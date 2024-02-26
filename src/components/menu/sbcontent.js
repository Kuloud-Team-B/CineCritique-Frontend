import React from "react";
import styles from './sbcontent.module.css';
import Sidebar from './sidebar';

const Sb = () => {
    return (
        <div className={styles.container}>
            <Sidebar width={200}>
                <button className={styles.title}>홈 home</button>

                <div className={styles.title}>게시판</div>
                    <div className={styles.sub}>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>

                <button className={styles.title}>배우 Actor</button>

                <div className={styles.title}>장르</div>
                <div className={styles.sub}>    
                    <button>액션</button>
                    <button>판타지</button>
                    <button>로맨틱 코미디</button>
                    <button>가족</button>
                    <button>코미디</button>
                    <button>다큐멘터리</button>
                    <button>기타</button>
                </div>

                <div className={styles.title}>고객지원</div>
                <div className={styles.sub}>
                    <button>공지사항</button>
                    <button>문의하기</button>
                </div>
            </Sidebar>
        </div>
    );
};

export default Sb;