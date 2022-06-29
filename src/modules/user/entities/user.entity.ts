import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ nullable: true })
    address: string;

    // Relations Can Be With In Entities
    // One To One (Database -> User(id (pk), name, email), Wallet(id, balance, token, userId (fk) (unique)) )
    // One To Many >> Projects (Many) -> A Company (One), A Company (One) -> Projects (Many) (Company(name, type, pk), Projects(pk, name, duration, company_pk(fk)))
    // Many To Many >> Industry(name, type), SectorFolder(name, type, size) -> Bridge (Table) -> IndustrySectorRequirements (pk, folder_pk (fk), industry_pk(fk))
    // Industry A (cnic, cv)
    // Industry B (cnic, driverLicense)
    // Industry C (cv)
    // Industry D (cv, driverLicense, cnic)
}
