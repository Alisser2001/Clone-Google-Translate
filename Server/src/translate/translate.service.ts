import { Injectable, BadRequestException } from '@nestjs/common';
import { FromLanguage, Languages } from './translate.entity';
import axios from 'axios';

@Injectable()
export class TranslateService {
    getTranslate(fromLanguage: FromLanguage, toLanguage: Languages, fromText: string) {
        let url = `https://translation.googleapis.com/language/translate/v2?key=${process.env.API_KEY}`;
        /*const body = JSON.stringify({
            "q": encodeURI(fromText),
            "source": fromLanguage,
            "target": toLanguage,
            "format": "text"
        });*/
        url += '&q=' + encodeURI(fromText);
        url += `&source=${fromLanguage}`;
        url += `&target=${toLanguage}`;
        let res = axios.get(url).then(res => JSON.stringify(res)).then((response) => {
            return response//.data.translations[0].translatedText;
        }).catch(error => {
            throw new BadRequestException("Algo ha salido mal al traducir", "Bad Request");
        });
        return res;
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
