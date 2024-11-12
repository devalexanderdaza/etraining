import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { CategoriesModule } from './categories/categories.module';
import { ModalitiesModule } from './modalities/modalities.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '162.241.61.243',
      port: 3306,
      username: 'alexan43_etraining_prueba',
      password: '[r9N*7E7%@AT',
      database: 'alexan43_etraining_prueba',
      autoLoadEntities: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // usar migraciones en producción
    }),
    RolesModule,
    CategoriesModule,
    ModalitiesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
