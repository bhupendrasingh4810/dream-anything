import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('support_tickets')
export class SupportTicket {
    @PrimaryGeneratedColumn('uuid')
    id: string;  // Unique ID of the support ticket

    @Column('uuid')
    user_id: string;  // ID of the user who created the support ticket

    @ManyToOne(() => User, (user) => user.supportTickets)
    @JoinColumn({ name: 'user_id' })
    user: User;  // User who created the support ticket

    @Column('text')
    subject: string;  // Subject of the support ticket

    @Column('text')
    description: string;  // Description of the issue

    @Column('enum', { enum: ['Open', 'Closed', 'Pending'] })
    status: string;  // Status of the ticket (Open, Closed, Pending)

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;  // Timestamp when the support ticket was created

    @Column('timestamp', { nullable: true })
    updated_at: Date;  // Timestamp of the last update to the ticket
}
