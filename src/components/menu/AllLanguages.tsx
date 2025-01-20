import { SUPPORTED_FROM_LANGUAGES, SUPPORTED_TO_LANGUAGES } from "../../utils/constants"
import styles from "../../styles/AllLanguages.module.css";
import { LanguagesFrom, LanguagesTo, SectionType } from "../../utils/types.d";
import { useState } from "../../hooks/useStore";

type Props = {
    type: SectionType.From | SectionType.To
}

export default function AllLanguages({ type }: Props) {
    const { fromLanguage, setFromLanguage, setToLanguage } = useState();
    const handleLanguage = (e: React.MouseEvent<HTMLLIElement>) => {
        if (type === SectionType.From) {
            setFromLanguage((e.currentTarget as HTMLLIElement).getAttribute("value") as LanguagesTo);
        } else {
            setToLanguage((e.currentTarget as HTMLLIElement).getAttribute("value") as LanguagesTo);
        }
    }
    return (
        <div className={styles.containerAllLang}>
            <h3 className={styles.search}>Translate {type === SectionType.From ? "from" : "to"}</h3>
            <ul className={styles.listLangs}>
                {type === SectionType.From ? Object.entries({ ...SUPPORTED_FROM_LANGUAGES }).map(([key, lan], index) => {
                    return (<li className={fromLanguage === key ? styles.languageSelected : styles.language} key={key} value={key} onClick={handleLanguage}>{lan}</li>)
                }) : Object.entries({ ...SUPPORTED_TO_LANGUAGES }).map(([key, lan], index) => {
                    return (<li className={fromLanguage === key ? styles.languageSelected : styles.language} key={key} value={key} onClick={handleLanguage}>{lan}</li>)
                })}
            </ul>
        </div>
    )
}