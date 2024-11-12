import { Test, TestingModule } from '@nestjs/testing';
import { InscriptionStatusController } from './inscription-status.controller';
import { InscriptionStatusService } from './inscription-status.service';

describe('InscriptionStatusController', () => {
  let controller: InscriptionStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InscriptionStatusController],
      providers: [InscriptionStatusService],
    }).compile();

    controller = module.get<InscriptionStatusController>(InscriptionStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
