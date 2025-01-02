import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '@modules/users/entities/user.entity';
import { Contest } from '@modules/contests/entities/contest.entity';
import { Transaction } from '@modules/transactions/entities/transaction.entity';
import { UserNotification } from '@modules/notifications/entities/notification.entity';
import { SupportTicket } from '@modules/support/entities/support-ticket.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                // type: 'postgres',
                // url: configService.get<string>('DATABASE_URL'),
                // autoLoadEntities: true,
                // synchronize: configService.get<string>('NODE_ENV') !== 'production',
                    type: 'postgres', // Database type
                    host: process.env.DB_HOST || 'localhost', // Database host
                    port: parseInt(process.env.DB_PORT, 10) || 5432, // Database port
                    username: process.env.DB_USERNAME || 'postgres', // Database username
                    password: process.env.DB_PASSWORD || 'Asdf@1993#Bs', // Database password
                    database: process.env.DB_NAME || 'Dream Anything', // Database name
                    entities:[User, Contest, Transaction, UserNotification, SupportTicket],
                    autoLoadEntities: true, // Automatically load entities (classes decorated with @Entity)
                    synchronize: true, // Auto-sync database schema in development (disable in production)
            }),
            inject: [ConfigService],
        }),
        TypeOrmModule.forFeature([User])
    ],
})
export class DatabaseModule { }