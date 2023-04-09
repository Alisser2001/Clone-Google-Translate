//import { AUTO_LANGUAGE } from '../constants';
import { Action, Languages, State, FromLanguage } from '../types';
import { useReducer } from "react";

const initialState: State = {
    fromLanguage: "es",
    toLanguage: "en",
    fromText: "",
    toText: "",
    loading: false
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "INTERCHANGE_LANGUAGES":
            //if (state.fromLanguage === AUTO_LANGUAGE) return state;
            const loadingFromInterchange = state.toText !== "";
            return {
                ...state,
                fromLanguage: state.toLanguage,
                toLanguage: state.fromLanguage,
                loading: loadingFromInterchange,
                fromText: state.toText,
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