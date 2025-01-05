import { SetMetadata } from '@nestjs/common';
// import { Role } from './role.enum'; // Enum defining the roles

// Enum defining different roles in the application
export enum Role {
    Admin = 'admin', // Admin has full access
    User = 'user', // Regular user
    Moderator = 'moderator', // Moderator with limited administrative privileges
    Manager = 'manager', // Manager has higher privileges than a regular user
    Developer = 'developer', // Developer role for technical tasks
}

// Mapping roles to human-readable labels for better clarity in UI or logs
export const RoleLabels = {
    [Role.Admin]: 'Administrator',
    [Role.User]: 'Regular User',
    [Role.Moderator]: 'Moderator',
    [Role.Manager]: 'Manager',
    [Role.Developer]: 'Developer',
};

// Decorator to set roles for a specific route or controller
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);

// Decorator to set permissions for a specific route or controller
export const Permissions = (...permissions: string[]) => SetMetadata('permissions', permissions);
