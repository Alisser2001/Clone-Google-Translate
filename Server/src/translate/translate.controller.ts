import { Controller, Get } from '@nestjs/common';
import { TranslateService } from './translate.service';
import { FromLanguage, Languages } from './translate.entity';

@Controller('translate')
export class TranslateController {
    constructor(
        private TranslateService: TranslateService
    ) { }
    @Get()
    Translate(fromLanguage: FromLanguage, toLanguage: Languages, fromText: string) {
        return this.TranslateService.getTranslate(fromLanguage, toLanguage, fromText);
    }
}
