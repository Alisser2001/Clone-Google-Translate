import styles from "./profileMenu.module.css";

export default function ProfileMenu() {
    return (
        <div className={styles.containerProfile}>
            <div className={styles.info}>
                <div className={styles.head}>
                    <img src="/Profile.png" className={styles.img} />
                    <div className={styles.textCont}>
                        <p className={styles.name}>Juan Estiven Carmona Muñoz</p>
                        <p className={styles.gmail}>Estiven25b777@gmail.com</p>
                    </div>
                </div>
                <button className={styles.portButton}><a href="https://portfolio-alisser2001.vercel.app/" target="_blank">Go to portfolio</a></button>
                <ul className={styles.tecList}>
                    <li className={styles.tecElement}>
                        <img src="typescript.png" className={styles.tecImg}/>
                        <p className={styles.tecName}>TypeScript</p>
                    </li>
                    <li className={styles.tecElement}>
                        <img src="react.png" className={styles.tecImg}/>
                        <p className={styles.tecName}>React</p>
                    </li>
                    <li className={styles.tecElement}>
                        <img src="vite.png" className={styles.tecImg}/>
                        <p className={styles.tecName}>Vite</p>
                    </li>
                    <li className={styles.tecElement}>
                        <img src="css-3.png" className={styles.tecImg}/>
                        <p className={styles.tecName}>CSS 3</p>
                    </li>
                    <li className={styles.tecElement}>
                        <img src="google.png" className={styles.tecImg}/>
                        <p className={styles.tecName}>Google Translate API</p>
                    </li>
                </ul>
            </div>
            <p className={styles.credits}>Created by AliDev</p>
        </div>
    )
}