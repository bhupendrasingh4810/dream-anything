import { Module } from '@nestjs/common';
import { ReportsController } from './controllers/reports/reports.controller';
import { ReportsService } from './services/reports/reports.service';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule {}
