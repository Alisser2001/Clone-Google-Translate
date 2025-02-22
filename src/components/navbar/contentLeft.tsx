import styles from "./contentLeft.module.css";
import { useState } from "../../hooks/useStore";

function ContentLeft() {
    const { setViewSide, setViewLinks, setViewProfile, setViewAllLangsFrom, setViewAllLangsTo } = useState();
    const handleViewSide = () => {
        setViewSide(true);
        setViewLinks(false);
        setViewProfile(false);
        setViewAllLangsFrom(false);
        setViewAllLangsTo(false);
    }
    return (
        <section className={styles.contentLeft}>
            <div className={styles.menuIcon} onClick={() => handleViewSide()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 6l16 0"></path>
                    <path d="M4 12l16 0"></path>
                    <path d="M4 18l16 0"></path>
                </svg>
            </div>
            <a className={styles.icon}>
                <span className={styles.googleIcon} />
                <span className={styles.translateText}>Translate Clone</span>
            </a>
        </section>
    )
}

export default ContentLeft;