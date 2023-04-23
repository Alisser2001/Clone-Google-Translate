import { SUPPORTED_FROM_LANGUAGES, SUPPORTED_TO_LANGUAGES } from "../constants"
import styles from "../styles/AllLanguages.module.css";
import { LanguagesFrom, Languages, SectionType } from "../types.d";

type Props = {
    value: LanguagesFrom,
    type: SectionType.From | SectionType.To,
    onChange: (language: LanguagesFrom) => void;
}

export default function AllLanguages({ value, type, onChange }: Props) {

    const handleLanguage = (e: React.MouseEvent<HTMLLIElement>) => {
        onChange((e.currentTarget as HTMLLIElement).getAttribute("value") as Languages)
    }

    return (
        <div className={styles.containerAllLang}>
            <h3 className={styles.search}>Translate {type===SectionType.From ?  "from" : "to"}</h3>
            <ul className={styles.listLangs}>
                {type===SectionType.From ?  Object.entries({ ...SUPPORTED_FROM_LANGUAGES }).map(([key, lan], index) => {
                    return (<li className={value === key ? styles.languageSelected : styles.language} key={key} value={key} onClick={handleLanguage}>{lan}</li>)
                }) : Object.entries({ ...SUPPORTED_TO_LANGUAGES }).map(([key, lan], index) => {
                    return (<li className={value === key ? styles.languageSelected : styles.language} key={key} value={key} onClick={handleLanguage}>{lan}</li>)
                })}
            </ul>
        </div>
    )
}