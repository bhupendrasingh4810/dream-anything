import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('notifications')
export class UserNotification {
    @PrimaryGeneratedColumn('uuid')
    id: string;  // Unique ID of the notification

    @Column('uuid')
    user_id: string;  // ID of the user receiving the notification

    @ManyToOne(() => User, (user) => user.notifications)
    @JoinColumn({ name: 'user_id' })
    user: User;  // User receiving the notification

    @Column('varchar')
    title: string;  // Title of the notification

    @Column('text')
    message: string;  // Content of the notification

    @Column('boolean', { default: false })
    is_read: boolean;  // Whether the notification has been read

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;  // Timestamp when the notification was created

    @Column('timestamp', { nullable: true })
    read_at: Date;  // Timestamp when the notification was read
}
