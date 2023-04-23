import styles from "../styles/LanguageSelector.module.css";
import { AUTO_LANGUAGE, SUPPORTED_TO_LANGUAGES } from "../constants";
import { Languages, LanguagesFrom, SectionType } from '../types.d';

type Props = {
    type: SectionType.From | SectionType.To,
    value: LanguagesFrom,
    onChange: (language: LanguagesFrom) => void,
    handleViewAll: (type: boolean) => void,
    viewAllLangsFrom: boolean,
    viewAllLangsTo: boolean
};



export default function LanguageSelector({ onChange, value, type, handleViewAll, viewAllLangsFrom, viewAllLangsTo }: Props) {

    const handleViewAllLang = () => {
        if (type === SectionType.From) {
            handleViewAll(!viewAllLangsFrom)
        } else {
            handleViewAll(!viewAllLangsTo)
        }
    }

    const handleLanguage = (e: React.MouseEvent<HTMLLIElement>) => {
        onChange((e.currentTarget as HTMLLIElement).getAttribute("value") as Languages)
    }

    return (
        <div>
            <ul className={type === SectionType.From ? styles.contSelectFrom : styles.contSelectTo}>
                {type === SectionType.From
                    ? <>{<li className={value === AUTO_LANGUAGE ? styles.autoLanguageSelected : styles.autoLanguage} key={AUTO_LANGUAGE} value={AUTO_LANGUAGE} onClick={handleLanguage}>Detect Language</li>}
                        {Object.entries({ ...SUPPORTED_TO_LANGUAGES }).map(([key, lan], index) => {
                            if (index < 3) return (<li className={value === key ? styles.languageSelected : styles.language} key={key} value={key} onClick={handleLanguage}>{lan}</li>)
                        })}</>
                    : Object.entries({ ...SUPPORTED_TO_LANGUAGES }).map(([key, lan], index) => {
                        if (index < 3) return (<li className={value === key ? styles.languageSelected : styles.language} key={key} value={key} onClick={handleLanguage}>{lan}</li>)
                    })}
                <li className={styles.moreButton} onClick={handleViewAllLang}>
                    {type === SectionType.From && !viewAllLangsFrom ?
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.moreIcon} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 5l0 14"></path>
                            <path d="M18 13l-6 6"></path>
                            <path d="M6 13l6 6"></path>
                        </svg>
                        : type === SectionType.To && !viewAllLangsTo ? <svg xmlns="http://www.w3.org/2000/svg" className={styles.moreIcon} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 5l0 14"></path>
                            <path d="M18 13l-6 6"></path>
                            <path d="M6 13l6 6"></path>
                        </svg>
                            : type === SectionType.From ? <svg xmlns="http://www.w3.org/2000/svg" className={styles.closeIcon} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M18 6l-12 12"></path>
                                <path d="M6 6l12 12"></path>
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" className={styles.closeIcon} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M18 6l-12 12"></path>
                                <path d="M6 6l12 12"></path>
                            </svg>
                    }
                </li>
            </ul>
        </div>
    );
}