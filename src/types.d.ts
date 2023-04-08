import { SUPPORTED_LANGUAGES, AUTO_LANGUAGE } from "./constants"

export interface State {
    fromLanguage: string,
    toLanguage: string,
    fromText: string,
    toText: string,
    loading: boolean
}

export type Languages = keyof typeof SUPPORTED_LANGUAGES;

export type AutoLanguage = typeof AUTO_LANGUAGE;

export type FromLanguage = Languages | AutoLanguage;

export type Action =
    | {
        type: "INTERCHANGE_LANGUAGES"
    }
    | {
        type: "SET_FROM_LANGUAGE",
        payload: string
    }
    | {
        type: "SET_TO_LANGUAGE",
        payload: string
    }
    | {
        type: "SET_FROM_TEXT",
        payload: string
    }
    | {
        type: "GET_TO_TEXT",
        payload: string
    }