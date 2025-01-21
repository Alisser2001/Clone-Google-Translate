import styles from "./fromLanguageContainer.module.css";
import TextArea from "../textArea";
import { useState } from "../../hooks/useStore";
import { SectionType } from "../../utils/types.d";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect } from "react";
import TranslateAPI from "../../services/translate";

function FromLanguageContainer() {
    const { fromText, setFromText, fromLanguage, toLanguage, setToText } = useState();
    const debounceFromText = useDebounce(fromText, 300);
    useEffect(() => {
        if (debounceFromText === "") return;
        TranslateAPI(fromLanguage, toLanguage, debounceFromText)
            .then(result => {
                if (result == null) return;
                setToText(result);
            });
    }, [debounceFromText, fromLanguage, toLanguage]);
    return (
        <div className={styles.fromLanguageCont}>
            <TextArea type={SectionType.From} />
            <span className={styles.deleteButton}>
                <svg onClick={() => setFromText("")} xmlns="http://www.w3.org/2000/svg" className={styles.deleteIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </svg>
            </span>
            <section className={styles.fromLanguageOptions}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles.microIcon} viewBox="0 0 16 16">
                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                    <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                </svg>
                <p className={styles.countChars}>{fromText.length} / 1000</p>
            </section>
        </div>
    )
}

export default FromLanguageContainer;