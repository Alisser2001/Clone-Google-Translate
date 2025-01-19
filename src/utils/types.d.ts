import { SUPPORTED_FROM_LANGUAGES, SUPPORTED_TO_LANGUAGES } from "./constants"

export type Languages = keyof typeof SUPPORTED_TO_LANGUAGES;

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

export type Action =
    | {
        type: "INTERCHANGE_LANGUAGES"
    }
    | {
        type: "SET_FROM_LANGUAGE",
        payload: LanguagesFrom
    }
    | {
        type: "SET_TO_LANGUAGE",
        payload: LanguagesFrom
    }
    | {
        type: "SET_FROM_TEXT",
        payload: string
    }
    | {
        type: "SET_TO_TEXT",
        payload: string
    }
    | {
        type: "SET_VIEW_SIDE",
        payload: boolean
    }
    | {
        type: "SET_VIEW_LINKS",
        payload: boolean
    }
    | {
        type: "SET_VIEW_PROFILE",
        payload: boolean
    }
    | {
        type: "SET_VIEW_ALL_LANGS_FROM"
        payload: boolean
    }
    | {
        type: "SET_VIEW_ALL_LANGS_TO"
        payload: boolean
    }

export enum SectionType {
    From = "from",
    To = "to"
}