import { Injectable, CanActivate, ExecutionContext, Logger, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
// import { Role } from './role.enum'; // Enum defining the roles
// import { PermissionsService } from './permissions.service'; // Permissions service for checking user permissions

@Injectable()
export class PermissionsGuard implements CanActivate {
  private readonly logger = new Logger(PermissionsGuard.name);

  constructor(
    private reflector: Reflector,
    // private permissionsService: PermissionsService, // Inject PermissionsService to validate permissions
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Retrieve the roles metadata from the handler or controller
    // const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
    //   context.getHandler(),
    //   context.getClass(),
    // ]);

    // if (!requiredRoles) {
    //   // If no roles are required, allow access
    //   return true;
    // }

    // Retrieve the user from the request (set by JwtStrategy)
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Check if the user has any of the required roles
    // const hasRole = requiredRoles.some((role) => user.roles?.includes(role));
    // if (!hasRole) {
    //   // Log the unauthorized access attempt
    //   this.logger.warn('User does not have required role', { userId: user.userId, requiredRoles });
    //   throw new ForbiddenException('You do not have the required roles');
    // }

    // Retrieve permissions metadata (e.g., for CRUD actions)
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>('permissions', [
      context.getHandler(),
      context.getClass(),
    ]);

    // If permissions are required, validate the user's permissions
    // if (requiredPermissions && !await this.permissionsService.hasPermissions(user.userId, requiredPermissions)) {
    //   this.logger.warn('User does not have required permissions', { userId: user.userId, requiredPermissions });
    //   throw new ForbiddenException('You do not have the required permissions');
    // }

    return true; // Access is granted
  }
}
