import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Exchange {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public accepted: boolean;

  @Column({ nullable: true })
  public isActiveBorr: boolean;

  @Column({ nullable: true })
  public isActiveLend: boolean;

  @ManyToOne(() => User, (userBorrowing: User) => userBorrowing.exchangesBorr)
  public userBorrowing: User;

  @ManyToOne(() => User, (userLending: User) => userLending.exchangesLend)
  public userLending: User;
}
