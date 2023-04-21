import { Body, Controller, Get } from '@nestjs/common';
import { TranslateService } from './translate.service';
import { TranslateDataDTO } from './dto/translate.dto';

@Controller('translate')
export class TranslateController {
    constructor(
        private TranslateService: TranslateService,
    ) { }
    @Get()
    async Translate(@Body() dataTranslate: TranslateDataDTO) {
        return await this.TranslateService.getTranslate(dataTranslate.fromLanguage, dataTranslate.toLanguage, dataTranslate.fromText);
    }
}
