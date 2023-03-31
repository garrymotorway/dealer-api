import { Module } from '@nestjs/common';
import { EnquiriesController } from './controllers/enquiries.controller';
import { EnquiriesService } from './services/enquiries.service';

@Module({
  controllers: [EnquiriesController],
  providers: [EnquiriesService],
})
export class EnquiriesModule {}
