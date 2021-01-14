import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Exchanges } from '../exchanges/exchange.entity';

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
}
