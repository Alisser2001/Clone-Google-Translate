import { Module } from '@nestjs/common';
import { TranslateModule } from './translate/translate.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TranslateModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
