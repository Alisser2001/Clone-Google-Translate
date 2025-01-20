import { SUPPORTED_FROM_LANGUAGES, SUPPORTED_TO_LANGUAGES } from "./constants"

export type LanguagesTo = keyof typeof SUPPORTED_TO_LANGUAGES;

export type LanguagesFrom = keyof typeof SUPPORTED_FROM_LANGUAGES;

export interface State {
    fromLanguage: LanguagesFrom,
    toLanguage: LanguagesFrom,
    fromText: string,
    toText: string,
    loading: boolean,
    viewSide: boolean,
    viewLinks: boolean,
    viewProfile: boolean,
    viewAllLangsFrom: boolean,
    viewAllLangsTo: boolean
}

export type Actions = {
    interchangeLanguages: () => void;
    setFromLanguage: (payload: LanguagesFrom) => void;
    setToLanguage: (payload: LanguagesFrom) => void;
    setFromText: (payload: string) => void;
    setToText: (payload: string) => void;
    setViewSide: (payload: boolean) => void;
    setViewLinks: (payload: boolean) => void;
    setViewProfile: (payload: boolean) => void;
    setViewAllLangsFrom: (payload: boolean) => void;
    setViewAllLangsTo: (payload: boolean) => void;
};

export enum SectionType {
    From = "from",
    To = "to"
}