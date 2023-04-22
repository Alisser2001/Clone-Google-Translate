import LanguageSelector from './LanguageSelector';
import { Languages, SectionType } from '../types.d';
import TextArea from './TextArea';
import { useState } from '../hooks/useStore';
import { VOICE_FOR_LANGUAGES } from '../constants';
import { useEffect } from "react";
import TranslateAPI from "../services/translate.js";
import { useDebounce } from '../hooks/useDebounce';
import styles from "../styles/Translate.module.css";

interface Props {
    onClick: (type: string, view: boolean) => void
}

export default function Translate({ onClick }: Props) {
    const {
        fromLanguage,
        toLanguage,
        fromText,
        toText,
        loading,
        setFromText,
        setToText,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
    } = useState();

    const handleClick = (type: string, view: boolean) => {
        onClick(type, view);
    }

    const debounceFromText = useDebounce(fromText, 300);

    const handleClipboard = () => navigator.clipboard.writeText(toText);

    const handleSpeak = () => {
        const utterance = new SpeechSynthesisUtterance(toText);
        utterance.lang = VOICE_FOR_LANGUAGES[toLanguage as Languages];
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
    }

    useEffect(() => {
        if (debounceFromText === "") return;
        TranslateAPI(fromLanguage, toLanguage, debounceFromText)
            .then(result => {
                if (result == null) return;
                setToText(result);
            });
    }, [debounceFromText, fromLanguage, toLanguage]);

    return (
        <div className={styles.container} onClick={() => handleClick("all", false)}>
            <div className={styles.languajeSelector}>
                <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage} />
                <button className={styles.interchangeButton} disabled={/*fromLanguage === AUTO_LANGUAGE || */ fromLanguage === toLanguage} onClick={interchangeLanguages}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.interchangeIcon} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M17 10h-14l4 -4"></path>
                        <path d="M7 14h14l-4 4"></path>
                    </svg>
                </button>
                <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage} />
            </div>
            <div className={styles.fromLanguageCont}>
                <TextArea
                    type={SectionType.From}
                    value={fromText}
                    onChange={setFromText}
                />
                <p className={styles.countChars}>{fromText.length} / 200</p>
                <button className={styles.deleteButton} onClick={() => setFromText("")}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.deleteIcon} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div className={styles.toLanguageCont}>
                <div className={styles.toLanguageText}>
                    <TextArea
                        type={SectionType.To}
                        value={toText}
                        onChange={setToText}
                        loading={loading}
                    />
                    <button
                        onClick={() => handleClipboard()}
                        className={styles.copyButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.copyIcon} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                            <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                        </svg>
                    </button>
                    <button
                        onClick={() => handleSpeak()}
                        className={styles.speakButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.speakIcon} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M15 8a5 5 0 0 1 0 8"></path>
                            <path d="M17.7 5a9 9 0 0 1 0 14"></path>
                            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}