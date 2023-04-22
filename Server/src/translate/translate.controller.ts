import { Body, Controller, Get, BadRequestException } from '@nestjs/common';
import { TranslateService } from './translate.service';
import { TranslateDataDTO } from './dto/translate.dto';
const translate = require("google-translate-api");

@Controller('translate')
export class TranslateController {
    constructor(
        private TranslateService: TranslateService,
    ) { }
    @Get()
    async Translate(@Body() dataTranslate: TranslateDataDTO) {
        return await translate(dataTranslate.fromText as string, { from: dataTranslate.fromLanguage as string, to: dataTranslate.toLanguage as string }).then((res: any) => {
            return res.text;
        }).catch((err: any) => {
            throw new BadRequestException("Algo ha salido mal...", err.code);
        });
        //return this.TranslateService.getTranslate(dataTranslate.fromLanguage, dataTranslate.toLanguage, dataTranslate.fromText);
    }
}
