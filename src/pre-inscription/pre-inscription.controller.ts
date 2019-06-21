import { Controller, Get } from '@nestjs/common';
import { PreInscriptionService } from './pre-inscription.service';

@Controller('pre-inscription')
export class PreInscriptionController {
    constructor(private readonly preInscriptionService : PreInscriptionService) {

    }

    @Get()
    getAll(): Promise<string> {
        return this.preInscriptionService.findAll()
    }
}
