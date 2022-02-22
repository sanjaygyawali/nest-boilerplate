import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptions } from 'src/utils/types/find-options.type';
import { DeepPartial, Repository } from 'typeorm';
import { Profile } from '../entity/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async findOneEntity(options: FindOptions<Profile>) {
    return this.profileRepository.findOne({
      where: options.where,
    });
  }

  async findManyEntities(options: FindOptions<Profile>) {
    return this.profileRepository.find({
      where: options.where,
    });
  }
  async saveEntity(data: DeepPartial<Profile>) {
    return this.profileRepository.save(this.profileRepository.create(data));
  }

  async softDelete(id: number): Promise<void> {
    await this.profileRepository.softDelete(id);
  }
}
