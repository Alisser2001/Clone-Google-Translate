import { FromLanguage, Languages, LanguagesValidator } from "../translate.entity";
import { IsNotEmpty, IsString, MaxLength, IsIn } from "class-validator";

export class TranslateDataDTO {
    @IsNotEmpty()
    @IsString()
    @IsIn([LanguagesValidator.en, LanguagesValidator.es, LanguagesValidator.fr])
    @MaxLength(5)
    fromLanguage: FromLanguage;
    @IsNotEmpty()
    @IsString()
    @IsIn([LanguagesValidator.en, LanguagesValidator.es, LanguagesValidator.fr])
    @MaxLength(5)
    toLanguage: Languages;
    @MaxLength(200)
    @IsNotEmpty()
    @IsString()
    fromText: string
}