import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Exchanges } from '../exchanges/exchange.entity';
import { Items } from '../items/item.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public username: string;

  @Column()
  public password: string;

  @Column()
  public location: string;

  @Column()
  public email: string;

  @OneToMany(() => Exchanges, (exchange: Exchanges) => exchange.userBorrowing)
  public exchangesBorr: Exchanges[];

  @OneToMany(() => Exchanges, (exchange: Exchanges) => exchange.userLending)
  public exchangesLend: Exchanges[];

  @ManyToMany(() => Items, (item: Items) => item.usersBorrowing)
  @JoinTable()
  public toBorrowList: Items[];

  @ManyToMany(() => Items, (item: Items) => item.usersLending)
  @JoinTable()
  public toLendList: Items[];
}
