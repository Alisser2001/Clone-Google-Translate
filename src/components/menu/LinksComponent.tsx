import styles from "../../styles/LinksComponent.module.css";

export default function LinksComponent() {
    return (
        <div className={styles.containerLinks}>
            <ul className={styles.linksList}>
                <a className={styles.listElement} href="https://github.com/Alisser2001" target="_blank">
                    <img src="/github.png" className={styles.img}/>
                    <p className={styles.text}>GitHub</p>
                </a>
                <a className={styles.listElement} href="https://www.linkedin.com/in/alisser2001/" target="_blank">
                    <img src="/linkedin.png" className={styles.img}/>
                    <p className={styles.text}>LinkedIn</p>
                </a>
                <a className={styles.listElement} href="https://twitter.com/JuanEstivenCar2" target="_blank">
                    <img src="/gorjeo.png" className={styles.img}/>
                    <p className={styles.text}>Twitter</p>
                </a>
                <a className={styles.listElement} href="https://www.instagram.com/alisser2001/" target="_blank">
                    <img src="/instagram.png" className={styles.img}/>
                    <p className={styles.text}>Instagram</p>
                </a>
            </ul>
        </div>
    )
}