import { Injectable } from '@nestjs/common';
import { FromLanguage, Languages } from './translate.entity';

@Injectable()
export class TranslateService {
    async getTranslate(fromLanguage: FromLanguage, toLanguage: Languages, fromText: string) {
        try {
            let url = `https://translation.googleapis.com/language/translate/v2?key=${process.env.API_KEY}`;
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
}
