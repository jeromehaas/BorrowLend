import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Exchange } from '../exchanges/exchange.entity';

@Entity()
export class User {
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

  @OneToMany(() => Exchange, (exchange: Exchange) => exchange.userBorrowing)
  public exchangesBorr: Exchange[];

  @OneToMany(() => Exchange, (exchange: Exchange) => exchange.userLending)
  public exchangesLend: Exchange[];
}
