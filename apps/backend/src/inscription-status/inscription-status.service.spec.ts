import { Test, TestingModule } from '@nestjs/testing';
import { InscriptionStatusService } from './inscription-status.service';

describe('InscriptionStatusService', () => {
  let service: InscriptionStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InscriptionStatusService],
    }).compile();

    service = module.get<InscriptionStatusService>(InscriptionStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
