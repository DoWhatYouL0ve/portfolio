import React from "react";
import bg from './../../assets/mainBG.jpg'
import styles from'./header.module.css'

export const Header = () => {
    return <>
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
        }} className={styles.bg}>

        </div>
    </>
}