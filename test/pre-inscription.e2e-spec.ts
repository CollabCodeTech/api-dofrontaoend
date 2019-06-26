import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { PreInscriptionModule } from './../src/pre-inscription/pre-inscription.module';

describe('PreInscription (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PreInscriptionModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/pre-inscription (GET)', () => {
    return request(app.getHttpServer())
      .get('/pre-inscription')
      .expect(200)
      .expect('Content-Type', /json/)
  });
});
