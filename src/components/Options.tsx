import styles from "../styles/Options.module.css";

export default function Options() {
    return (
        <div className={styles.container}>
            <button className={styles.optionText}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 5h7"></path>
                    <path d="M9 3v2c0 4.418 -2.239 8 -5 8"></path>
                    <path d="M5 9c0 2.144 2.952 3.908 6.7 4"></path>
                    <path d="M12 20l4 -9l4 9"></path>
                    <path d="M19.1 18h-6.2"></path>
                </svg>
                <p className={styles.text}>Text</p>
            </button>
        </div>
    )
}