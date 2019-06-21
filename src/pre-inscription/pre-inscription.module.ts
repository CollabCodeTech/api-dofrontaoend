import { Module } from '@nestjs/common';
import { PreInscriptionController } from './pre-inscription.controller';
import { PreInscriptionService } from './pre-inscription.service';

@Module({
  controllers: [PreInscriptionController],
  providers: [PreInscriptionService]
})
export class PreInscriptionModule {}
