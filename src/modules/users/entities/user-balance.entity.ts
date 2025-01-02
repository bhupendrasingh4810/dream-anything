import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('user_balance')
export class UserBalance {
    @PrimaryGeneratedColumn('uuid')
    id: string;  // Unique ID of the balance record

    @Column('uuid')
    user_id: string;  // ID of the user whose balance is tracked

    @ManyToOne(() => User, (user) => user.balance_cash)
    @JoinColumn({ name: 'user_id' })
    user: User;  // User whose balance is associated with this record

    @Column('decimal', { precision: 15, scale: 2 })
    balance: number;  // The current balance of the user

    @Column('decimal', { precision: 15, scale: 2 })
    available_balance: number;  // The available balance that can be used for transactions

    @Column('decimal', { precision: 15, scale: 2 })
    bonus_balance: number;  // The bonus balance (if applicable)

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    last_updated_at: Date;  // Timestamp of the last update to the balance
}
