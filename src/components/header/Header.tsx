import React from "react";
import styles from'./header.module.css'
import indexStyles from'./../../assets/reusableCSS.module.css'
import photo from './../../assets/photo.webp'

export const Header = () => {
    return <header className={styles.bg}>
        <div className={`${indexStyles.widthLG} ${styles.containerHeight}`}>
            <div className={styles.headerDataContainer}>
                <div ><img src={photo} alt="" className={styles.photo} /></div>
                <div className={styles.info}>
                    <h1>- WILLIAM ROSS -</h1>
                    <h3>Front-end Developer</h3>
                </div>
                <button className={`${styles.button} ${indexStyles.buttonStyles}`}>Download CV</button>
                <button className={`${styles.button} ${indexStyles.buttonStyles}`}>Contact Me</button>
            </div>
        </div>
    </header>
}