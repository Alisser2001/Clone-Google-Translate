import { FromLanguage, Languages } from "../types";
const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
import axios, { AxiosRequestConfig } from "axios";

export default async function TranslateAPI(fromLanguage: FromLanguage, toLanguage: Languages, fromText: string) {
    try {
        let body = JSON.stringify({
            "fromLanguage": fromLanguage,
            "toLanguage": toLanguage,
            "formText": fromText
        });
        return await axios.get(SERVER_URL, body as AxiosRequestConfig).then((response) => {
            return response;
        });
    } catch (e) {
        return "Error. Algo ha salido mal...";
    }
}