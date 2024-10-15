import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from '@/app.controller'
import { AppService } from '@/app.service'
import { HealthModule } from '@/health/health.module'
import { UsersModule } from './users/users.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:smartquestionsmongodb@mongodb:27017/sq_db_v1?authSource=admin',
      // 'mongodb://root:smartquestionsmongodb@mongodb:27017/sq_db_v1?authSource=admin',
    ),
    HealthModule,
    UsersModule,
    TeachersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
