import { Module } from '@nestjs/common';
import { ShippingController } from './shipping/shipping.controller';
import { ShippingService } from './shipping/shipping.service';

@Module({
  imports: [],
  controllers: [ShippingController],
  providers: [ShippingService],
})
export class AppModule {}
