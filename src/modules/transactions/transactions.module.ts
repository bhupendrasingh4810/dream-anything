import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers/transactions/transactions.controller';
import { TransactionsService } from './services/transactions/transactions.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule {}
