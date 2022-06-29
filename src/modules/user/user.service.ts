import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    // Entity Manager & Repository
    // -- Entity Manager: Multiple, User -> em.save(User)
    // -- Repository: repository.save(), find, delete, update, and so on

    // Inject Repo in Constructor

    constructor(@InjectRepository(User) private repository: Repository<User>) {}

    create(createUserDto: CreateUserDto) {
        return this.repository.save(createUserDto);
    }

    findAll() {
        return this.repository.find();
    }

    findOne(id: number) {
        return this.repository.findOneBy({ id });
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.repository.update(
            {
                id,
            },
            updateUserDto,
        );
    }

    remove(id: number) {
        return this.repository.delete({ id });
    }
}
