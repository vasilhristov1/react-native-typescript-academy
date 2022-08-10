import { Repository, RepositoryInMemoryImpl } from './repository.js';

export class PostCreateDto {
    constructor(
        public title: string,
        public content: string,
        public tags: string[],
        public imageUrl: string,
        public authorId: idType
    ) { }
}

export interface UserRepository extends Repository<idType, User> {
    findByNamePart(titlePart: string): User[];
}

export class UserRepositoryImpl extends RepositoryInMemoryImpl<idType, User> implements UserRepository {
    findByNamePart(firstN: string): User[] {
        return this.findAll().filter(user => user.firstName!.includes(firstN));
    }
}

/////////

export type idType = number | undefined;

export type formFieldDict<Value> = { 
    [key: string]: string
}

export enum UserRole {
    USER, ADMIN
}

export enum Status {
    ACTIVE, SUSPENDED, DEACTIVATED
}

export class User {
  static repoName = "users";

  constructor(
    public id: idType,
    public firstName: string | undefined,
    public lastName: string | undefined,
    public username: string | undefined,
    public password: string | undefined,
    public gender: string | undefined,
    public userRole: UserRole,
    public imageUrl: string | undefined,
    public description: string | undefined,
    public status: Status,
    public registrationTimestamp: Date,
    public modificationTimestamp: Date
  ) {

    this.firstName = this.firstName || "No First Name";
    this.lastName = this.lastName || "No Last Name";
    this.username = this.username || "No username";
    this.password = this.password || "No password";
    this.gender = this.gender || "No gender";
    this.userRole = this.userRole || UserRole.USER;
    this.imageUrl = this.imageUrl || "No imageUrl";
    this.status = this.status || Status.SUSPENDED;
    this.registrationTimestamp = this.registrationTimestamp;
    this.modificationTimestamp = this.modificationTimestamp;
  }
}