import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { CoursesModule } from './courses/courses.module';
import { InscriptionStatusModule } from './inscription-status/inscription-status.module';
import { ModalitiesModule } from './modalities/modalities.module';
import { RolesModule } from './roles/roles.module';
import { UserCoursesModule } from './user-courses/user-courses.module';
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
    CoursesModule,
    UserCoursesModule,
    InscriptionStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
