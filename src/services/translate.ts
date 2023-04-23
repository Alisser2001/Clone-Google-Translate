import { LanguagesFrom, Languages } from "../types";
import { setCORS } from "google-translate-api-browser";
// setting up cors-anywhere server address
const CORS_URL = import.meta.env.VITE_APP_CORS_URL;
const translate = setCORS(CORS_URL);

export default async function TranslateAPI(fromLanguage: LanguagesFrom, toLanguage: LanguagesFrom, fromText: string) {
    try {
        return await translate(fromText, { from: fromLanguage, to: toLanguage })
            .then(res => {
                return res.text
            })
            .catch(err => {
                return "Something went wrong, enable the translator and try again";
            });
        /*let url = `https://translation.googleapis.com/language/translate/v2?key=${process.env.API_KEY}`;
        const body = JSON.stringify({
            "q": encodeURI(fromText),
            "source": fromLanguage,
            "target": toLanguage,
            "format": "text"
        });
        url += '&q=' + encodeURI(fromText);
        url += `&source=${fromLanguage}`;
        url += `&target=${toLanguage}`;
        return await axios.get(url).then(res => JSON.stringify(res)).then((response) => {
            return response//.data.translations[0].translatedText;
        }).catch(error => {
            throw new BadRequestException("Algo ha salido mal al traducir", "Bad Request");
        });*/
    } catch (e) {
        return "Something went wrong, enable the translator and try again";
    }
}