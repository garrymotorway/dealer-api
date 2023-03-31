import { ApiProperty } from '@nestjs/swagger';

export abstract class Enquiry {
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public vehicleDetails: any;
}
