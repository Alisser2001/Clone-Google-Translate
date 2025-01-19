import { LanguagesFrom } from "../utils/types.d";
import { setCORS } from "google-translate-api-browser";
const CORS_URL = import.meta.env.VITE_APP_CORS_URL;
const translate = setCORS(CORS_URL);

export default async function TranslateAPI(fromLanguage: LanguagesFrom, toLanguage: LanguagesFrom, fromText: string) {
    try {
        const result = await translate(fromText, {
            from: fromLanguage,
            to: toLanguage
        });
        return result.text;
    } catch (err) {
        console.error("Error en la traducción:", err);
        return "Something went wrong, enable the translator and try again";
    }
}