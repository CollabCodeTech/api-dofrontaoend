import { Test, TestingModule } from '@nestjs/testing';
import { PreInscriptionController } from './pre-inscription.controller';
import { PreInscriptionService } from './pre-inscription.service';

describe('PreInscription Controller', () => {
  let controller: PreInscriptionController;
  let service: PreInscriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreInscriptionController],
      providers: [PreInscriptionService]
    }).compile();

    controller = module.get<PreInscriptionController>(PreInscriptionController);
    service = module.get<PreInscriptionService>(PreInscriptionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  
  it('service getAll', () => {
    service.getAll = jest.fn()
    controller.getAll()
    expect(service.getAll).toBeCalledWith()
  });
});
