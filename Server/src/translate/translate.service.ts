import { Injectable, BadRequestException } from '@nestjs/common';
import { FromLanguage, Languages } from './translate.entity';
const translate = require("google-translate-api");

@Injectable()
export class TranslateService {
    async getTranslate(fromLanguage: FromLanguage, toLanguage: Languages, fromText: string) {
        return await translate(fromText, { from: fromLanguage, to: toLanguage }).then((res: any) => {
            return res.text;
        }).catch((err: any) => {
            throw new BadRequestException("Algo ha salido mal...", err.code);
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
        /*
        try {
            return await axios.post(url, body).then((response) => {
                return response.data.translations[0].translatedText;
            });
        } catch (e) {
            throw new BadRequestException(`Algo salió mal al traducir...`, "Bad Request");
        }*/
    }
}
