import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './permission.entity';
import { Repository } from 'typeorm';
import { AbstractService } from 'src/common/abstract.service';

@Injectable()
export class PermissionService extends AbstractService {
  constructor(
    @InjectRepository(Permission) private readonly permissionRepository: Repository<Permission>
  ) {
    super(permissionRepository);
  }

  async all(): Promise<Permission[]> {
    return this.permissionRepository.find();
  }

}
