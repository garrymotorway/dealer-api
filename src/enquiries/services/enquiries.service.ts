import { Injectable, Logger, Scope } from '@nestjs/common';
import * as mwDealershipComposer from '@motorway/motorway-api-client/mw-dealership-composer';
import { Enquiry } from '../models/Enquiry';

@Injectable({
  scope: Scope.DEFAULT,
})
export class EnquiriesService {
  async getEnquiry(id: number): Promise<Enquiry> {
    Logger.debug('Making a call to composer using api-client');
    const result = await mwDealershipComposer.getEnquiry({
      id,
      include: 'vehicleDetails',
    });
    Logger.debug('Got a response from composer', result);
    return {
      id: result.id,
      vehicleDetails: result.vehicleDetails,
    };
  }
}
