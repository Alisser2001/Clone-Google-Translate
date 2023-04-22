import styles from "../styles/LanguageSelector.module.css";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import { Languages, FromLanguage, SectionType } from '../types.d';

type Props =
    | {
        type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void
    }
    | {
        type: SectionType.To, value: Languages, onChange: (language: Languages) => void
    }
    ;



export default function LanguageSelector({ onChange, value, type }: Props) {

    const handleLanguage = (e: React.MouseEvent<HTMLLIElement>) => {
        onChange((e.currentTarget as HTMLLIElement).getAttribute("value") as Languages)
    }

    return (
        <div>
            <ul className={type === SectionType.From ? styles.contSelectFrom : styles.contSelectTo}>
                {type === SectionType.From
                    ? <>{/*<li className={value === AUTO_LANGUAGE ? styles.autoLanguageSelected : styles.autoLanguage} key={AUTO_LANGUAGE} value={AUTO_LANGUAGE} onClick={handleLanguage}>Detect Language</li>*/}
                        {Object.entries({ ...SUPPORTED_LANGUAGES }).map(([key, lan], index) => {
                            if (index < 3) return (<li className={value === key ? styles.languageSelected : styles.language} key={key} value={key} onClick={handleLanguage}>{lan}</li>)
                        })}</>
                    : Object.entries({ ...SUPPORTED_LANGUAGES }).map(([key, lan], index) => {
                        if (index < 3) return (<li className={value === key ? styles.languageSelected : styles.language} key={key} value={key} onClick={handleLanguage}>{lan}</li>)
                    })}
                <li className={styles.moreButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.moreIcon} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 5l0 14"></path>
                        <path d="M18 13l-6 6"></path>
                        <path d="M6 13l6 6"></path>
                    </svg>
                </li>
            </ul>
            {/*<select onChange={handleLanguage} className={type === SectionType.From ? styles.contSelectFrom : styles.contSelectTo}>
                {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
                Object.entries(SUPPORTED_LANGUAGES).map(([key, lan]) => {
                    return (
                        <option key={key} value={key}>{lan}</option>
                    )
                })
            </select>*/}
        </div>
    );
}