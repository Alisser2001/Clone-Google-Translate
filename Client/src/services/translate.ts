import { FromLanguage, Languages } from "../types";
//const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
//import axios, { AxiosRequestConfig } from "axios";
import { setCORS } from "google-translate-api-browser";
// setting up cors-anywhere server address
const translate = setCORS("http://cors-anywhere.herokuapp.com/");

export default async function TranslateAPI(fromLanguage: FromLanguage, toLanguage: Languages, fromText: string) {
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
    } catch (e) {
        return "Error. Algo ha salido mal...";
    }
}