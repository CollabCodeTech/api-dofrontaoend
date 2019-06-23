import { Injectable } from '@nestjs/common';
import { PreInscriptionModule as PreInscription } from './pre-inscription.module';
        
@Injectable()
export class PreInscriptionService {
    async findAll(): Promise<PreInscription> {
        return await {
            name: "Marco Bruno",
            email: "marco.bruno.br@gmail.com"
        }
    }
}
