import { User } from '@modules/users/entities/user.entity'; // Import the User entity if required

declare global {
  namespace Express {
    interface Request {
      user?: User; // Add the 'user' property with an optional 'User' type
    }
  }
}