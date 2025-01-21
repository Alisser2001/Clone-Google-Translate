import styles from "./languageSelectorContainer.module.css";
import LanguageSelector from "../languageSelector";
import { SectionType } from "../../utils/types.d";
import { useState } from "../../hooks/useStore";
import AllLanguages from "../menu/allLanguagesMenu";
import { AUTO_LANGUAGE } from "../../utils/constants";

function LanguageSelectorContainer() {
    const { fromLanguage, viewAllLangsFrom, viewAllLangsTo, toLanguage, interchangeLanguages } = useState();
    return (
        <div className={styles.languajeSelectorContainer}>
            <LanguageSelector type={SectionType.From} value={fromLanguage}/>
            {viewAllLangsFrom && <AllLanguages type={SectionType.From} />}
            <button className={styles.interchangeButton} disabled={fromLanguage === AUTO_LANGUAGE || fromLanguage === toLanguage} onClick={interchangeLanguages}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.interchangeIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 10h-14l4 -4"></path>
                    <path d="M7 14h14l-4 4"></path>
                </svg>
            </button>
            <LanguageSelector type={SectionType.To} value={toLanguage}/>
            {viewAllLangsTo && <AllLanguages type={SectionType.To} />}
        </div>
    )
}

export default LanguageSelectorContainer;