import { Test, TestingModule } from '@nestjs/testing';
import { PreInscriptionController } from './pre-inscription.controller';

describe('PreInscription Controller', () => {
  let controller: PreInscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreInscriptionController],
    }).compile();

    controller = module.get<PreInscriptionController>(PreInscriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
