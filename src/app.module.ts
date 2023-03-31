import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { EnquiriesModule } from './enquiries/enquiries.module';

@Module({
  imports: [
    HealthModule,
    EnquiriesModule,
    ConfigModule.forRoot({
      envFilePath: '.env.defaults',
    }),
  ],
  providers: [],
})
export class AppModule {}
