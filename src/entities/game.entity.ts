import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PublisherEntity } from './publisher.entity';

@Entity('games')
export class GameEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column({ type: 'simple-array' })
  tags: string[];

  @CreateDateColumn({ name: 'release_date', type: 'timestamp' })
  releaseDate: Date;

  @ManyToOne(() => PublisherEntity, (publisher) => publisher.name, {
    eager: true,
  })
  @JoinColumn()
  publisher: PublisherEntity;
}
