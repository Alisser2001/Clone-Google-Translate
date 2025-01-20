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
            <p className={styles.countChars}>{fromText.length} / 1000</p>
        </div>
    )
}

export default FromLanguageContainer;