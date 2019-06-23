import { Injectable } from '@nestjs/common';
import { PreInscriptionModule as PreInscription } from './pre-inscription.module';
        
@Injectable()
export class PreInscriptionService {
    private preInscription : PreInscription = {
        name: "Marco Bruno",
        email: "marco@collabcode.tech"
    }

    public async findAll(): Promise<PreInscription> {
        return await this.preInscription
    }
}
