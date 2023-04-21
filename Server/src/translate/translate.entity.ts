import { SUPPORTED_LANGUAGES } from "./constants";

export type Languages = keyof typeof SUPPORTED_LANGUAGES;

export type FromLanguage = Languages