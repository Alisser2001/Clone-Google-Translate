import styles from "./starIcon.module.css";

function StarIcon() {
    return (
        <section className={styles.startIcon}>
            <a href="https://cors-anywhere.herokuapp.com/" target='_blank' className={styles.starButtonCont}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.startButton} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
            </a>
            <p className={styles.textStart}>Enable Translate</p>
        </section>
    )
}

export default StarIcon;