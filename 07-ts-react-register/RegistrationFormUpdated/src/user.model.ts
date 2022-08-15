import { IdType } from './shared-types';

export enum UserStatus {
    ACTIVE = 1, SUSPENDED, DEACTIVATED
}

export enum UserRole {
    USER = 1, ADMIN
}

export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public username: string,
        public password: string,
        public gender: string,
        public pictureUrl: string,
        public description: string,
        public id: IdType = undefined,
        public role: UserRole.USER,
        public status = UserStatus.ACTIVE
    ) {}
}