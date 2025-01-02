import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '@modules/users/services/users/users.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersService]
})
export class AuthModule {}
