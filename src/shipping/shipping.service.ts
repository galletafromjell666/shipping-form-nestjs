import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Shipping } from './shipping.dto';
import * as fs from 'fs';

@Injectable()
export class ShippingService {
  private readonly logger = new Logger(ShippingService.name);
  private readonly filePath = 'data.json';

  writeJson(shipping: Shipping) {
    let jsonData: Shipping[] = [];
    if (fs.existsSync(this.filePath)) {
      const existingData = fs.readFileSync(this.filePath, 'utf-8');
      jsonData = JSON.parse(existingData);
    }

    const id = uuidv4();
    const newShipping = { id, ...shipping };

    jsonData.push(newShipping);
    fs.writeFileSync(this.filePath, JSON.stringify(jsonData, null, 2));
    this.logger.log(newShipping);
    return newShipping;
  }

  readJson(): any {
    const jsonData = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(jsonData);
  }
}
