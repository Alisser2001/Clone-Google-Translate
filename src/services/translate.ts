import { LanguagesFrom } from "../types";
import { translate } from "google-translate-api-browser";
const CORS_URL = import.meta.env.VITE_APP_CORS_URL;

export default async function TranslateAPI(fromLanguage: LanguagesFrom, toLanguage: LanguagesFrom, fromText: string) {
    try {
        return await translate(fromText, { from: fromLanguage, to: toLanguage, corsUrl: CORS_URL })
            .then(res => {
                return res.text
            })
            .catch(err => {
                return "Something went wrong, enable the translator and try again";
            });
    } catch (e) {
        return "Something went wrong, enable the translator and try again";
    }
}