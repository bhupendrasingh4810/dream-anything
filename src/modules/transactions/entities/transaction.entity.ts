import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string;  // Unique ID of the transaction

    @Column('uuid')
    user_id: string;  // ID of the user who made the transaction

    @ManyToOne(() => User, (user) => user.transactions)
    @JoinColumn({ name: 'user_id' })
    user: User;  // User who made the transaction

    @Column('decimal', { precision: 15, scale: 2 })
    amount: number;  // Amount involved in the transaction

    @Column('enum', { enum: ['Deposit', 'Withdraw', 'Transfer'] })
    transaction_type: string;  // Type of the transaction (Deposit, Withdraw, Transfer)

    @Column('timestamp')
    transaction_date: Date;  // Date and time of the transaction

    @Column('varchar', { nullable: true })
    transaction_reference: string;  // Reference for the transaction, if available

    @Column('jsonb', { nullable: true })
    transaction_metadata: object;  // Additional metadata related to the transaction (e.g., payment method, status)

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;  // Timestamp when the transaction was created
}
