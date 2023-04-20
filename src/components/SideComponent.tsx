import styles from "../styles/SideComponent.module.css";

export default function SideComponent() {
    return (
        <div className={styles.containerSide}>
            <a className={styles.icon}>
                <span className={styles.googleIcon} />
                <span className={styles.translateText}>Translate Clone</span>
            </a>
            <ul className={styles.options}>
                <li className={styles.option}>
                    <a href="https://github.com/Alisser2001/Clone-Google-Translate.git" target="_blank">Project Repository</a>
                </li>
            </ul>
        </div>
    )
}