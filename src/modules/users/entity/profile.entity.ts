import { ApiProperty } from '@nestjs/swagger';
import { EntityHelper } from 'src/utils/entity-helper';
import { Column, Entity } from 'typeorm';

@Entity('profiles')
export class Profile extends EntityHelper {
  @ApiProperty({ example: 'UUID' })
  @Column({ nullable: true })
  sessionid: string | null;

  @ApiProperty({ example: 'UUID' })
  @Column({ nullable: true })
  userId: string | null;

  @ApiProperty({ example: 'kathmandu baneshwor' })
  @Column({ nullable: true })
  address: string | null;

  @ApiProperty({ example: '+9779844776371' })
  @Column({ nullable: true })
  phoneNo: string | null;

  @ApiProperty({ example: '+9779844776371' })
  @Column({ nullable: true })
  secondaryPhone: string | null;

  @ApiProperty({ example: false })
  @Column({ nullable: false })
  isPhoneVerified: boolean = false;

  @ApiProperty({ example: false })
  @Column({ nullable: false })
  isGuest: boolean = true;
}
