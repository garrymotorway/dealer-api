import { Test, TestingModule } from '@nestjs/testing';
import { EnquiriesController } from '../enquiries.controller';
import { EnquiriesService } from '../../services/enquiries.service';

describe('HealthController', () => {
  let enquiriesController: EnquiriesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EnquiriesController],
      providers: [EnquiriesService],
    }).compile();

    enquiriesController = app.get<EnquiriesController>(EnquiriesController);
  });

  describe('getEnquiry()', () => {
    it('should return OK', async () => {
      expect(await enquiriesController.getEnquiry(123)).toEqual('');
    });
  });
});
