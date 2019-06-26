import { Test, TestingModule } from '@nestjs/testing';
import { PreInscriptionController } from './pre-inscription.controller';
import { PreInscriptionService } from './pre-inscription.service';

describe('PreInscription Controller', () => {
  let controller: PreInscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreInscriptionController],
      providers: [PreInscriptionService]
    }).compile();

    controller = module.get<PreInscriptionController>(PreInscriptionController);
  });

  it('should be defined', () => {
    console.log(controller);
    expect(controller).toBeDefined();
  });
});
