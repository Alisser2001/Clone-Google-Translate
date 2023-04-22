import { LanguagesFrom, Languages } from "../types";
//const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
//import axios, { AxiosRequestConfig } from "axios";
import { setCORS } from "google-translate-api-browser";
// setting up cors-anywhere server address
const translate = setCORS("https://cors-anywhere.herokuapp.com/");

export default async function TranslateAPI(fromLanguage: LanguagesFrom, toLanguage: LanguagesFrom, fromText: string) {
    try {
        return await translate(fromText, { from: fromLanguage, to: toLanguage })
            .then(res => {
                return res.text
            })
            .catch(err => {
                console.log(err);
            });

        /*let body = JSON.stringify({
            "fromLanguage": fromLanguage,
            "toLanguage": toLanguage,
            "formText": fromText
        });
        return await axios.get(SERVER_URL, body as AxiosRequestConfig).then((response) => {
            return response;
        });*/

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
        /*
        try {
            return await axios.post(url, body).then((response) => {
                return response.data.translations[0].translatedText;
            });
        } catch (e) {
            throw new BadRequestException(`Algo salió mal al traducir...`, "Bad Request");
        }*/
    } catch (e) {
        return "Error. Algo ha salido mal...";
    }
}