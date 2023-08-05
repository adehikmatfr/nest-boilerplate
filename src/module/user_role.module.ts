import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleEntity } from '../model/user_role/user_role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleEntity])],
  controllers: [],
  providers: [],
})
export class UserRoleModule {}
