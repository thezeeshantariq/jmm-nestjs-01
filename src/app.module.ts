import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'project_mgmt',
            autoLoadEntities: true,
            // synchronize: true,
        }),
        UserModule,
    ],
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
