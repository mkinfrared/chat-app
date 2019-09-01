import {
  BaseEntity, Column, Entity, PrimaryGeneratedColumn
} from "typeorm";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 255, unique: true })
  email: string;

  @Column("varchar", { length: 255, unique: true })
  username: string;

  @Column("text")
  password: string;

  @Column("boolean", { default: false })
  confirmed: boolean;
}

export default User;
