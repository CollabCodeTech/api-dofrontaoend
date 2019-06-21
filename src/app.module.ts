import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreInscriptionModule } from './pre-inscription/pre-inscription.module';

@Module({
  imports: [PreInscriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
