//import { AUTO_LANGUAGE } from '../constants';
import { AUTO_LANGUAGE } from '../utils/constants';
import { Action, Languages, State, LanguagesFrom } from '../utils/types';
import { create } from 'zustand';

type StateWithActions = State & {
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

export const useState = create<StateWithActions>((set, get) => ({
    fromLanguage: AUTO_LANGUAGE,
    toLanguage: "en",
    fromText: "",
    toText: "",
    loading: false,
    viewSide: false,
    viewLinks: false,
    viewProfile: false,
    viewAllLangsFrom: false,
    viewAllLangsTo: false,

    interchangeLanguages: () => {
        const { fromLanguage, toLanguage, toText } = get();
        if (fromLanguage === AUTO_LANGUAGE) return;
        set({
            fromLanguage: toLanguage,
            toLanguage: fromLanguage,
            loading: toText !== "",
            fromText: toText,
            toText: "",
        });
    },

    setFromLanguage: (payload) => {
        const { toLanguage } = get();
        if (toLanguage === payload) {
            set((state) => ({
                fromLanguage: payload,
                toLanguage: state.fromLanguage,
            }));
        } else {
            set({ fromLanguage: payload });
        }
    },

    setToLanguage: (payload) => {
        const { fromLanguage } = get();
        if (fromLanguage === payload) {
            set((state) => ({
                toLanguage: payload,
                fromLanguage: state.toLanguage,
            }));
        } else {
            set({ toLanguage: payload });
        }
    },

    setFromText: (payload) => {
        set({
            fromText: payload,
            loading: payload !== "",
            toText: "",
        });
    },

    setToText: (payload) => {
        set({
            toText: payload,
            loading: false,
        });
    },

    setViewSide: (payload) => set({ viewSide: payload }),

    setViewLinks: (payload) => set({ viewLinks: payload }),

    setViewProfile: (payload) => set({ viewProfile: payload }),

    setViewAllLangsFrom: (payload) => set({ viewAllLangsFrom: payload }),

    setViewAllLangsTo: (payload) => set({ viewAllLangsTo: payload }),
}));

