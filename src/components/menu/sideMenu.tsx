import styles from "./sideMenu.module.css";
import { useState } from "../../hooks/useStore";

export default function SideMenu() {
    const { setViewSide } = useState();
    return (
        <div className={styles.containerSide}>
            <span className={styles.closeButton}>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setViewSide(false)} className={styles.closeIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </svg>
            </span>
            <a className={styles.icon}>
                <span className={styles.googleIcon} />
                <span className={styles.translateText}>Translate Clone</span>
            </a>
            <ul className={styles.options}>
                <li className={styles.option}>
                    <a href="https://github.com/Alisser2001/Clone-Google-Translate.git" target="_blank">Project Repository</a>
                </li>
                <li className={styles.option}>
                    <a href="https://cors-anywhere.herokuapp.com/" target="_black">Enable Translator</a>
                </li>
            </ul>
        </div>
    )
}