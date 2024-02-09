import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Shipping } from './shipping.dto';
import { ShippingService } from './shipping.service';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Get()
  @HttpCode(200)
  getShippingOrders() {
    try {
      const shippingOrders = this.shippingService.readJson();
      return { shippingOrders, status: 'success' };
    } catch (error) {
      throw new HttpException(
        { Message: 'Error Reading JSON', error },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  @HttpCode(201)
  createShippingOrder(@Body() shipping: Shipping) {
    try {
      const newShipping = this.shippingService.writeJson(shipping);
      return { shipping: newShipping, status: 'success' };
    } catch (error) {
      throw new HttpException(
        { Message: 'Error Reading JSON', error },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
