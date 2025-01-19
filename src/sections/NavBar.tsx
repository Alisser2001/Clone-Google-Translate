import ContentLeft from "../components/navbar/contentLeft";
import ContentRight from "../components/navbar/contentRight";
import styles from "../styles/navbar/NavBar.module.css";

function NavBar() {
    return (
        <div className={styles.container}>
            <ContentLeft />
            <ContentRight />
        </div>
    );
}

export default NavBar;