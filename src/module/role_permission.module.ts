import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolePermissionEntity } from '../model/role_permission/role.permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolePermissionEntity])],
  controllers: [],
  providers: [],
})
export class RolePermissionModule {}
