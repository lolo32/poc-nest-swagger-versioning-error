import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.enableVersioning();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/v1/test (GET)', () => {
    return request(app.getHttpServer())
      .get('/v1/test')
      .expect(200)
      .expect('This should works... maybe');
  });

  it('/test (GET) should not work', () => {
    return request(app.getHttpServer())
      .get('/test')
      .expect(404);
  });

  it('/v1/versions (GET)', () => {
    return request(app.getHttpServer())
      .get('/v1/versions')
      .expect(200)
      .expect('Hello world!');
  });

  it('/versions (GET) should not work', () => {
    return request(app.getHttpServer())
      .get('/versions')
      .expect(404);
  });
});
