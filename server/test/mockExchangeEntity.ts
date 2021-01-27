import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class MockExchanges {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public accepted: boolean;

  @Column({ nullable: true })
  public isActiveBorr: boolean;

  @Column({ nullable: true })
  public isActiveLend: boolean;

  @Column()
  public createdAt: Date;

}
