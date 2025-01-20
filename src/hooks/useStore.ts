//import { AUTO_LANGUAGE } from '../constants';
import { AUTO_LANGUAGE } from '../utils/constants';
import { Actions, State } from '../utils/types';
import { create } from 'zustand';

export const useState = create<State & Actions>((set, get) => ({
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

