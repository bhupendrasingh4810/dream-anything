import { Gender, User } from '@modules/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { CreateUserDto } from 'src/core/auth/dto/create-user.dto';
// import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    // constructor(
    //     @InjectRepository(User) private readonly userRepository: Repository<User>, // TypeORM repository for User entity
    //   ) {}
    // async create(createUserDto: CreateUserDto): Promise<User> {
    //     const { gender, ...userData } = createUserDto;
      
    //     // Ensure gender is a valid value ('Male', 'Female', or 'Other')
    //     if (gender && !['Male', 'Female', 'Other'].includes(gender)) {
    //       throw new Error('Invalid gender value');
    //     }
      
    //     // const user = this.userRepository.create({
    //     //   ...userData, // Spread other user data
    //     //   gender: gender as Gender, // Assign the gender property
    //     // });
      
    //     return this.userRepository.save({}); // Save the new user to the database
    //   }
}
