import { Module } from '@nestjs/common';
import { SupportController } from './controllers/support/support.controller';
import { SupportService } from './services/support/support.service';

@Module({
  controllers: [SupportController],
  providers: [SupportService]
})
export class SupportModule {}
