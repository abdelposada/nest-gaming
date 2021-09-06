import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('publishers')
export class PublisherEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  siret: number;

  @Column()
  phone: string;
}
