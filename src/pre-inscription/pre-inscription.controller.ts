import { Controller, Get } from '@nestjs/common';
import { PreInscriptionService } from './pre-inscription.service';
import { PreInscriptionModule as PreInscription } from './pre-inscription.module';


@Controller('pre-inscription')
export class PreInscriptionController {
    constructor(private readonly preInscriptionService : PreInscriptionService) { }

    @Get()
    getAll(): Promise<PreInscription> {
        return this.preInscriptionService.findAll()
    }
}
