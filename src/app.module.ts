import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
})

// Dependency Injection -> IoC
// Nestjs Runtime (Container)

// Request -> Request Resolver 

// localhost:3000/users (List Users) : Get
//  -- Request Resolver
//    -- Controller 
//      -- Inject Request (Request, Params, Query String, Body)

// app.module.ts = root module

export class AppModule {}
