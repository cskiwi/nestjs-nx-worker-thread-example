import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { hello } from '@app/other';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
 
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/runWorker')
  runWorker(): string {
    this.logger.log(`Hello ${hello}`);

    return this.appService.runWorker();
  }
}
