import styles from "./contentRight.module.css";
import { useState } from "../../hooks/useStore";

function ContentRight() {
    const { setViewSide, setViewLinks, setViewProfile, setViewAllLangsFrom, setViewAllLangsTo } = useState();
    const handleViewLinks = () => {
        setViewSide(false);
        setViewLinks(true);
        setViewProfile(false);
        setViewAllLangsFrom(false);
        setViewAllLangsTo(false);
    }
    const handleViewProfile = () => {
        setViewSide(false);
        setViewLinks(false);
        setViewProfile(true);
        setViewAllLangsFrom(false);
        setViewAllLangsTo(false);
    }
    return (
        <section className={styles.contentRight}>
            <div className={styles.menuIcon} onClick={() => handleViewLinks()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4h6v6h-6z"></path>
                    <path d="M14 4h6v6h-6z"></path>
                    <path d="M4 14h6v6h-6z"></path>
                    <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                </svg>
            </div>
            <a className={styles.iconImg} onClick={() => handleViewProfile()}>
                <img src="/Profile.png" />
            </a>
        </section>
    )
}

export default ContentRight;