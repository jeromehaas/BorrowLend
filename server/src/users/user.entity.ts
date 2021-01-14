import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Exchanges } from '../exchanges/exchange.entity';

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
}
