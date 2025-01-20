import styles from "../styles/translate.module.css";
import StarIcon from '../components/translate/starIcon';
import LanguageSelectorContainer from '../components/translate/languageSelectorContainer';
import FromLanguageContainer from '../components/translate/fromLanguageContainer';
import ToLanguageContainer from '../components/translate/toLanguageContainer';

export default function Translate() {
    return (
        <div className={styles.container}>
            <section className={styles.translateArea}>
                <LanguageSelectorContainer/>
                <FromLanguageContainer/>
                <ToLanguageContainer/>
            </section>
            <StarIcon/>
        </div>
    )
}