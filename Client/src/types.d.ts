import { SUPPORTED_LANGUAGES, AUTO_LANGUAGE } from "./constants"

export interface State {
    fromLanguage: FromLanguage,
    toLanguage: Languages,
    fromText: string,
    toText: string,
    loading: boolean,
    viewSide: boolean,
    viewLinks: boolean,
    viewProfile: boolean
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
        payload: FromLanguage
    }
    | {
        type: "SET_TO_LANGUAGE",
        payload: Languages
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

export enum SectionType {
    From = "from",
    To = "to"
}