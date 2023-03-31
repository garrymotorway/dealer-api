import { Controller, Get, Logger, Next, Param, Res } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EnquiriesService } from '../services/enquiries.service';
import { NextFunction, Response } from 'express';
import { Enquiry } from '../models/Enquiry';

@Controller('enquiries')
@ApiTags('enquiries')
export class EnquiriesController {
  constructor(private enquiriesService: EnquiriesService) {}

  @Get('/:id')
  @ApiOkResponse({
    type: Enquiry,
  })
  async getEnquiry(
    @Param('id') id: number,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    try {
      Logger.debug('request for enquiry', { id });
      const result = await this.enquiriesService.getEnquiry(id);
      res.send(result).status(200);
      next();
    } catch (error: any) {
      Logger.error(error);
      next(error);
    }
  }
}
