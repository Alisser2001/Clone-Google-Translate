import styles from "./languageSelector.module.css";
import { AUTO_LANGUAGE, SUPPORTED_TO_LANGUAGES } from "../utils/constants";
import { LanguagesTo, LanguagesFrom, SectionType } from '../utils/types.d';
import { useState } from "../hooks/useStore";

type Props = {
    type: SectionType.From | SectionType.To,
    value: LanguagesFrom
};

export default function LanguageSelector({ type, value }: Props) {
    const { setFromLanguage, setViewAllLangsFrom, viewAllLangsFrom, viewAllLangsTo, setToLanguage, setViewAllLangsTo } = useState();
    const handleViewAllLang = () => {
        if (type === SectionType.From) {
            setViewAllLangsFrom(!viewAllLangsFrom)
        } else {
            setViewAllLangsTo(!viewAllLangsTo)
        }
    }
    const handleLanguage = (e: React.MouseEvent<HTMLLIElement>) => {
        if (type === SectionType.From) {
            setFromLanguage((e.currentTarget as HTMLLIElement).getAttribute("value") as LanguagesTo);
        } else {
            setToLanguage((e.currentTarget as HTMLLIElement).getAttribute("value") as LanguagesTo);
        }

    }
    return (
        <ul className={styles.selectLanguageContainer}>
            {type === SectionType.From && <li className={value === AUTO_LANGUAGE ? styles.languageSelected : styles.language} key={AUTO_LANGUAGE} value={AUTO_LANGUAGE} onClick={handleLanguage}>Detect Language</li>}
            {Object.entries({ ...SUPPORTED_TO_LANGUAGES }).map(([key, lan], index) => {
                if (index < 3) return (<li className={value === key ? styles.languageSelected : styles.language} key={key} value={key} onClick={handleLanguage}>{lan}</li>)
            })}
            <span className={styles.moreButton} onClick={handleViewAllLang}>
                {type === SectionType.From && !viewAllLangsFrom ?
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.moreIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 5l0 14"></path>
                        <path d="M18 13l-6 6"></path>
                        <path d="M6 13l6 6"></path>
                    </svg>
                    : type === SectionType.To && !viewAllLangsTo ? <svg xmlns="http://www.w3.org/2000/svg" className={styles.moreIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 5l0 14"></path>
                        <path d="M18 13l-6 6"></path>
                        <path d="M6 13l6 6"></path>
                    </svg> : type === SectionType.From ? <svg xmlns="http://www.w3.org/2000/svg" className={styles.closeIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" className={styles.closeIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg>
                }
            </span>
        </ul>
    );
}