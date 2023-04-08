import { AUTO_LANGUAGE } from '../constants';
import { Action, Languages, State, FromLanguage } from '../types';
import { useReducer } from "react";

const initialState: State = {
    fromLanguage: "auto",
    toLanguage: "en",
    fromText: "",
    toText: "",
    loading: false
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "INTERCHANGE_LANGUAGES":
            if (state.fromLanguage === AUTO_LANGUAGE) return state;
            return {
                ...state,
                fromLanguage: state.toLanguage,
                toLanguage: state.fromLanguage
            }
        case "SET_FROM_LANGUAGE":
            return {
                ...state,
                fromLanguage: action.payload
            }
        case "SET_TO_LANGUAGE":
            return {
                ...state,
                toLanguage: action.payload
            }
        case "SET_FROM_TEXT":
            return {
                ...state,
                loading: true,
                fromText: action.payload
            }
        case "SET_TO_TEXT":
            return {
                ...state,
                loading: false,
                toText: action.payload
            }
        default:
            return state;
    }
}

export function useState() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const interchangeLanguages = () => {
        dispatch({ type: "INTERCHANGE_LANGUAGES" })
    }
    const setFromLanguage = (payload: FromLanguage) => {
        dispatch({ type: "SET_FROM_LANGUAGE", payload })
    }
    const setToLanguage = (payload: Languages) => {
        dispatch({ type: "SET_TO_LANGUAGE", payload })
    }
    const setFromText = (payload: string) => {
        dispatch({ type: "SET_FROM_TEXT", payload })
    }
    const setToText = (payload: string) => {
        dispatch({ type: "SET_TO_TEXT", payload })
    }

    return {
        ...state,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setToText
    }
}