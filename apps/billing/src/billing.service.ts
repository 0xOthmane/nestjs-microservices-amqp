import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);

  bill(data: CreateOrderRequest) {
    this.logger.log('Billing...', data.request);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
