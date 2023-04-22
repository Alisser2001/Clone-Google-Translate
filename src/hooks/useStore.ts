//import { AUTO_LANGUAGE } from '../constants';
import { AUTO_LANGUAGE } from '../constants';
import { Action, Languages, State, LanguagesFrom } from '../types';
import { useReducer } from "react";
import { Reducer } from 'react';

const initialState: State = {
    fromLanguage: AUTO_LANGUAGE,
    toLanguage: "en",
    fromText: "",
    toText: "",
    loading: false,
    viewSide: false,
    viewLinks: false,
    viewProfile: false,
    viewAllLangsFrom: false,
    viewAllLangsTo: false
}

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
    switch (action.type) {
        case "INTERCHANGE_LANGUAGES":
            if (state.fromLanguage === AUTO_LANGUAGE) return state;
            const loadingFromInterchange = state.toText !== "";
            return {
                ...state,
                fromLanguage: state.toLanguage,
                toLanguage: state.fromLanguage,
                loading: loadingFromInterchange,
                fromText: state.toText,
            }
        case "SET_FROM_LANGUAGE":
            if (state.toLanguage === action.payload) {
                return {
                    ...state,
                    fromLanguage: action.payload,
                    toLanguage: state.fromLanguage
                }
            }
            return {
                ...state,
                fromLanguage: action.payload
            }
        case "SET_TO_LANGUAGE":
            if (state.fromLanguage === action.payload) {
                return {
                    ...state,
                    toLanguage: action.payload,
                    fromLanguage: state.toLanguage
                }
            }
            return {
                ...state,
                toLanguage: action.payload
            }
        case "SET_FROM_TEXT":
            const loadingFromText = action.payload !== "";
            return {
                ...state,
                loading: loadingFromText,
                fromText: action.payload,
                toText: ""
            }
        case "SET_TO_TEXT":
            return {
                ...state,
                loading: false,
                toText: action.payload
            }
        case "SET_VIEW_SIDE":
            return {
                ...state,
                viewSide: action.payload
            }
        case "SET_VIEW_LINKS":
            return {
                ...state,
                viewLinks: action.payload
            }
        case "SET_VIEW_PROFILE":
            return {
                ...state,
                viewProfile: action.payload
            }
        case "SET_VIEW_ALL_LANGS_FROM":
            return {
                ...state,
                viewAllLangsFrom: action.payload
            }
        case "SET_VIEW_ALL_LANGS_TO":
            return {
                ...state,
                viewAllLangsTo: action.payload
            }
        default:
            return state;
    }
}

export function useState() {
    const [state, dispatch] = useReducer(reducer, initialState as State);

    const interchangeLanguages = () => {
        dispatch({ type: "INTERCHANGE_LANGUAGES" })
    }
    const setFromLanguage = (payload: LanguagesFrom) => {
        dispatch({ type: "SET_FROM_LANGUAGE", payload })
    }
    const setToLanguage = (payload: LanguagesFrom) => {
        dispatch({ type: "SET_TO_LANGUAGE", payload })
    }
    const setFromText = (payload: string) => {
        dispatch({ type: "SET_FROM_TEXT", payload })
    }
    const setToText = (payload: string) => {
        dispatch({ type: "SET_TO_TEXT", payload })
    }
    const setViewSide = (payload: boolean) => {
        dispatch({ type: "SET_VIEW_SIDE", payload })
    }
    const setViewLinks = (payload: boolean) => {
        dispatch({ type: "SET_VIEW_LINKS", payload })
    }
    const setViewProfile = (payload: boolean) => {
        dispatch({ type: "SET_VIEW_PROFILE", payload })
    }
    const setViewAllLangsFrom = (payload: boolean) => {
        dispatch({ type: "SET_VIEW_ALL_LANGS_FROM", payload})
    }
    const setViewAllLangsTo = (payload: boolean) => {
        dispatch({ type: "SET_VIEW_ALL_LANGS_TO", payload})
    }
    return {
        ...state,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setToText,
        setViewSide,
        setViewLinks,
        setViewProfile,
        setViewAllLangsFrom,
        setViewAllLangsTo
    }
}