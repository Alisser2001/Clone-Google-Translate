import { FromLanguage, Languages } from "../types";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export default async function TranslateAPI(fromLanguage: FromLanguage, toLanguage: Languages, fromText: string) {
    try {
        let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
        url += '&q=' + encodeURI(fromText);
        url += `&source=${fromLanguage}`;
        url += `&target=${toLanguage}`;
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }).then(res => res.json()).then((response) => {
            return response.data.translations[0].translatedText;
        });
        return res;
    } catch (e) {
        return "Error. Algo ha salido mal...";
    }
}