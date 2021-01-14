import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Exchange } from '../exchanges/exchange.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public img: string;

  @OneToMany(() => Exchange, (exchange: Exchange) => exchange.itemBorrowed)
  public exchangesBorr: Exchange[];

  @OneToMany(() => Exchange, (exchange: Exchange) => exchange.itemLent)
  public exchangesLend: Exchange[];
}
