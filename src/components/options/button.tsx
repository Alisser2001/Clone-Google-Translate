import styles from "./button.module.css";

function Button() {
    return (
        <section className={styles.contOptions}>
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
            <button className={styles.optionText}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={styles.icon} viewBox="-1 -1 18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                </svg>
                <p className={styles.text}>Images</p>
            </button>
            <button className={styles.optionText}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={styles.icon} viewBox="-1 -1 19 19">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z" />
                </svg>
                <p className={styles.text}>Documents</p>
            </button>
            <button className={styles.optionText}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={styles.icon} viewBox="-1 -1 19 19">
                    <path d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                </svg>
                <p className={styles.text}>Web Sites</p>
            </button>
        </section>
    )
}

export default Button;
