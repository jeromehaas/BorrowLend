import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Users } from '../users/user.entity';
import { Items } from '../items/item.entity';

@Entity()
export class Exchanges {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public accepted: boolean;

  @Column({ nullable: true })
  public isActiveBorr: boolean;

  @Column({ nullable: true })
  public isActiveLend: boolean;

  @ManyToOne(() => Users, (userBorrowing: Users) => userBorrowing.exchangesBorr)
  public userBorrowing: Users;

  @ManyToOne(() => Users, (userLending: Users) => userLending.exchangesLend)
  public userLending: Users;

  @ManyToOne(() => Items, (itemBorrowed: Items) => itemBorrowed.exchangesBorr)
  public itemBorrowed: Items;

  @ManyToOne(() => Items, (itemLent: Items) => itemLent.exchangesLend)
  public itemLent: Items;
}
