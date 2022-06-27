import { Injectable } from '@nestjs/common';
import { UserDto } from './dto';

@Injectable()
export class AppService {
    private repo = [
        {
            id: 1,
            name: 'User 1',
            email: 'user+1@gmail.com',
            age: 21,
        },
        {
            id: 2,
            name: 'User 2',
            email: 'user+2@gmail.com',
            age: 30,
        },
        {
            id: 3,
            name: 'User 3',
            email: 'user+3@gmail.com',
            age: 21,
        },
        {
            id: 4,
            name: 'User 4',
            email: 'user+4@gmail.com',
            age: 21,
        },
    ];

    getUsers(): any {
        return this.repo;
    }

    getUserById(id: number): any {
        const user = this.repo.find((user) => user.id === id);
        return user;
    }

    createUser(dto :UserDto){
        return [...this.repo, dto]
    }
}
