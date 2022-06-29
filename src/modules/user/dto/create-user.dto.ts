import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
    MaxLength,
    Matches,
    IsOptional,
} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(30)
    @IsString()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password too weak',
    })
    password: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    isActive: boolean;

    @IsOptional()
    address: string;
}
