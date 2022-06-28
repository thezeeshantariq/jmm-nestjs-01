import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
    MaxLength,
    Matches,
} from 'class-validator';

export class UserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    // @IsNotEmpty({ message: 'Email is required' })
    @IsEmail()
    email: string;

    @IsNumber({}, { message: 'Age must be a number' })
    age: number;

    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(20)
    @IsString()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password too weak',
    })
    password: string;
}
