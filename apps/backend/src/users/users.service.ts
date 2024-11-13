import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesService } from 'src/roles/roles.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly rolesService: RolesService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const role = await this.rolesService.findOne(createUserDto.role);
    if (!role) {
      throw new Error('Role not found');
    }
    const newUser = new User();
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.username = createUserDto.username;
    newUser.password = createUserDto.password;
    newUser.email = createUserDto.email;
    newUser.role = role;
    newUser.phone = createUserDto.phone;
    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userToUpdate = await this.userRepository.findOne({
      where: { id },
    });

    if (!userToUpdate) {
      throw new Error('User not found');
    }

    if (updateUserDto.role) {
      const role = await this.rolesService.findOne(updateUserDto.role);
      if (!role) {
        throw new Error('Role not found');
      }
      userToUpdate.role = role;
    }

    if (updateUserDto.firstName) {
      userToUpdate.firstName = updateUserDto.firstName;
    }

    if (updateUserDto.lastName) {
      userToUpdate.lastName = updateUserDto.lastName;
    }

    if (updateUserDto.username) {
      userToUpdate.username = updateUserDto.username;
    }

    if (updateUserDto.password) {
      userToUpdate.password = updateUserDto.password;
    }

    if (updateUserDto.email) {
      userToUpdate.email = updateUserDto.email;
    }

    if (updateUserDto.phone) {
      userToUpdate.phone = updateUserDto.phone;
    }

    return await this.userRepository.update(id, userToUpdate);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
