import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Exchanges } from '../exchanges/exchange.entity';
import { Users } from '../users/user.entity';

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public img: string;

  @OneToMany(() => Exchanges, (exchange: Exchanges) => exchange.itemBorrowed)
  public exchangesBorr: Exchanges[];

  @OneToMany(() => Exchanges, (exchange: Exchanges) => exchange.itemLent)
  public exchangesLend: Exchanges[];

  @ManyToMany(() => Users, (user: Users) => user.toBorrowList)
  public usersBorrowing: Users[];

  @ManyToMany(() => Users, (user: Users) => user.toLendList)
  public usersLending: Users[];
}
