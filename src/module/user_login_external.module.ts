import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLoginExternalEntity } from '../model/user_login_external/user_login_external.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserLoginExternalEntity])],
  controllers: [],
  providers: [],
})
export class UserLoginExternalModule {}
