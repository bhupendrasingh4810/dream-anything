import { Module } from '@nestjs/common';
import { PromotionsController } from './controllers/promotions/promotions.controller';
import { PromotionsService } from './services/promotions/promotions.service';

@Module({
  controllers: [PromotionsController],
  providers: [PromotionsService]
})
export class PromotionsModule {}
