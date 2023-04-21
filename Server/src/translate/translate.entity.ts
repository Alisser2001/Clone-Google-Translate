import { SUPPORTED_LANGUAGES } from "./constants";

export type Languages = keyof typeof SUPPORTED_LANGUAGES;

export type FromLanguage = Languages

export enum LanguagesValidator {
    es= "es",
    en= "en",
    fr= "fr"
};