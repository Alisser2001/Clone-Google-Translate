import { SUPPORTED_FROM_LANGUAGES } from "../constants"
import styles from "../styles/AllLanguages.module.css";
import { LanguagesFrom, Languages, SectionType } from "../types";

type Props = {
    value: LanguagesFrom,
    type: SectionType.From | SectionType.To,
    onChange: (language: LanguagesFrom) => void;
}

export default function AllLanguages({ value, onChange }: Props) {

    const handleLanguage = (e: React.MouseEvent<HTMLLIElement>) => {
        onChange((e.currentTarget as HTMLLIElement).getAttribute("value") as Languages)
    }

    return (
        <div className={styles.containerAllLang}>
            <h3 className={styles.search}>Translate from</h3>
            <ul className={styles.listLangs}>
                {Object.entries({ ...SUPPORTED_FROM_LANGUAGES }).map(([key, lan], index) => {
                    return (<li className={value === key ? styles.languageSelected : styles.language} key={key} value={key} onClick={handleLanguage}>{lan}</li>)
                })}
            </ul>
        </div>
    )
}