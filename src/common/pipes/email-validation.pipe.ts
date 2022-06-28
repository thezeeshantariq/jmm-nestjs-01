import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    BadRequestException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

@Injectable()
export class EmailValidationPipe implements PipeTransform {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        if (!value.email) {
            throw new BadRequestException('You must provide email');
        } else {
            const domain = value.email.split('@')[1];
            if (domain !== 'jmm.com') {
                throw new BadRequestException(
                    'Your email must end with jmm.com domain',
                );
            }
        }

        const object = plainToClass(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            const errorObject = {
                message: 'Validation Error',
                errors: {},
            };
            errors.forEach((err: ValidationError) => {
                errorObject.errors[err.property] = Object.keys(
                    err.constraints,
                ).map((key: string) => err.constraints[key]);
            });
            throw new BadRequestException(errorObject);
        }
        return value;
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}
