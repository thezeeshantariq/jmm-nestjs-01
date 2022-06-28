import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    HttpException,
    NotFoundException,
    Param,
    Post,
    Query,
    Req,
    Res,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { EmailValidationPipe } from './common/pipes/email-validation.pipe';
import { UserDto } from './dto';

@Controller('api')
export class AppController {
    constructor(private readonly appService: AppService) {}

    // api
    @Get()
    getHello(): string {
        return 'Hello from the other side....';
    }

    // api/world
    @Get('world')
    getWorld(): string {
        return 'Hello from the World....';
    }

    @Get('request') // Dynamic Route/Routing
    requestEndpoint(@Req() req): any {
        console.log('::::: WITH NAME');
        console.log(':::: Request Body', req.body);
        return req;
    }

    @Get('request/:id/:email') // Dynamic Route/Routing
    // requestEndpointWithParam(@Param() params): any {
    requestEndpointWithParam(
        @Req() req, // -> request
        @Param() params, // -> request.params
        @Param('id') id: number, // -> request.params['id']
        @Param('email') userMail: string,
    ): any {
        // Validation Pipes
        console.log(':::: Request Params', id, userMail);
        return params;
    }

    @Get('query')
    queryEndpoint(@Query() qs, @Query('first_name') firstName: string): any {
        console.log('::: QS', qs, firstName);
        return qs;
    }

    // request Payload
    // Whitelisting
    // Transform
    @Post('body')
    @UsePipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
        }),
    )
    bodyEndpoint(@Res() res: Response, @Body() payload: UserDto): any {
        console.log('::: Body', payload);

        // orm.create(payload)

        return res.status(201).send({
            message: 'User created',
        });
    }

    @Get('users')
    findUsers(): any {
        return this.appService.getUsers();
    }

    @Get('users/:id')
    findUserById(@Param('id') id: number) {
        return this.appService.getUserById(+id);
    }

    @Post('Users')
    createUser(@Body() dto: UserDto) {
        return this.appService.createUser(dto);
    }

    @Post('validPipe/:id')
    // @UsePipes(
    //     new ValidationPipe({
    //         transform: true,
    //     }),
    // )
    @UsePipes(new EmailValidationPipe())
    validPipe(@Body() dto: UserDto) {}
}
