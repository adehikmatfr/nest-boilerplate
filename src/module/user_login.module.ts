import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLoginEntity } from '../model/user_login/user_login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserLoginEntity])],
  controllers: [],
  providers: [],
})
export class UserLoginModule {}
