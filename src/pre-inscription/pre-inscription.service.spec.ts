import { Test, TestingModule } from '@nestjs/testing';
import { PreInscriptionService } from './pre-inscription.service';

describe('PreInscriptionService', () => {
  let service: PreInscriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreInscriptionService],
    }).compile();

    service = module.get<PreInscriptionService>(PreInscriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
