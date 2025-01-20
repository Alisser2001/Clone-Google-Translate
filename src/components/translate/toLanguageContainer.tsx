import styles from "./toLanguageContainer.module.css";
import { useState } from "../../hooks/useStore";
import { VOICE_FOR_LANGUAGES } from "../../utils/constants";
import { SectionType } from "../../utils/types.d";
import TextArea from "../textArea";

function ToLanguageContainer() {
    const { toText, toLanguage, setToText, loading } = useState();
    const handleSpeak = () => {
        const utterance = new SpeechSynthesisUtterance(toText);
        if (VOICE_FOR_LANGUAGES.hasOwnProperty(toLanguage)) {
            utterance.lang = VOICE_FOR_LANGUAGES[toLanguage as keyof typeof VOICE_FOR_LANGUAGES];
            utterance.rate = 0.9;
            speechSynthesis.speak(utterance);
        }
    }
    const handleClipboard = () => navigator.clipboard.writeText(toText);

    return (
        <div className={styles.toLanguageCont}>
            <TextArea type={SectionType.To} />
            <span className={styles.favoriteButton}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.favoriteIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
            </span>
            <section className={styles.bottomOptions}>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleClipboard()} className={styles.copyIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                </svg><svg xmlns="http://www.w3.org/2000/svg" className={styles.speakIcon} onClick={() => handleSpeak()} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 8a5 5 0 0 1 0 8"></path>
                    <path d="M17.7 5a9 9 0 0 1 0 14"></path>
                    <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
                </svg>
            </section>
        </div>
    )
}

export default ToLanguageContainer;