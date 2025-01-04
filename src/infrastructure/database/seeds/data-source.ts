// src/database/data-source.ts
import { DataSource } from 'typeorm';
import { User } from '../../../modules/users/entities/user.entity';
import { Contest } from '../../../modules/contests/entities/contest.entity';
import { Transaction } from '../../../modules/transactions/entities/transaction.entity';
import { UserNotification } from '../../../modules/notifications/entities/notification.entity';
import { SupportTicket } from '../../../modules/support/entities/support-ticket.entity';

export const AppDataSource = new DataSource({
    logging: true,
    type: 'postgres', // Database type
    host: process.env.DB_HOST || 'localhost', // Database host
    port: parseInt(process.env.DB_PORT, 10) || 5432, // Database port
    username: process.env.DB_USERNAME || 'postgres', // Database username
    password: process.env.DB_PASSWORD || 'Asdf@1993#Bs', // Database password
    database: process.env.DB_NAME || 'Dream Anything', // Database name
    entities: [User, Contest, Transaction, UserNotification, SupportTicket],
    synchronize: true, // Auto-sync database schema in development (disable in production)
});
