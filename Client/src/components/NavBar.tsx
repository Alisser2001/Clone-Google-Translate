import styles from "../styles/NavBar.module.css";

interface Props {
    viewSide: boolean,
    viewLinks: boolean,
    viewProfile: boolean,
    onClick: (type: string, view: boolean) => void
}
function NavBar({ onClick, viewSide, viewLinks, viewProfile }: Props) {
    const handleClick = (type: string, view: boolean) => {
        onClick(type, view);
    }
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <div className={styles.menuIcon} onClick={() => viewSide ? handleClick("side", false) : handleClick("side", true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconTabler} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 6l16 0"></path>
                            <path d="M4 12l16 0"></path>
                            <path d="M4 18l16 0"></path>
                        </svg>
                    </div>
                    <a className={styles.icon} onClick={() => handleClick("all", false)}>
                        <span className={styles.googleIcon}/>
                        <span className={styles.translateText}>Translate Clone</span>
                    </a>
                </div>
                <div className={styles.contentRight}>
                    <div className={styles.menuIcon} onClick={() => viewLinks ? handleClick("links", false) : handleClick("links", true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconApps} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4h6v6h-6z"></path>
                            <path d="M14 4h6v6h-6z"></path>
                            <path d="M4 14h6v6h-6z"></path>
                            <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        </svg>
                    </div>
                    <a className={styles.iconImg} onClick={() => viewProfile ? handleClick("profile", false) : handleClick("profile", true)}>
                        <img src="/Profile.png" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;