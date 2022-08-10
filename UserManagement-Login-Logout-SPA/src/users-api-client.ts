import { PostCreateDto, User } from "./user.js";
import { idType } from "./user.js";

const API_BASE_URL = "http://localhost:4000/api/posts";

export interface UsersApiClient {
    getAllUsers(): Promise<User[]>;
    getUserById(id: idType): Promise<User>;
    addNewUser(user: PostCreateDto): Promise<User>;
    updateUser(user: User): Promise<User>;
    deleteUserById(id: idType): Promise<User>;
}

class UserApiClientImpl implements UsersApiClient {

    async getAllUsers(): Promise<User[]> {
        return this.handleRequest(API_BASE_URL);
    }

    async getUserById(id: number): Promise<User> {
        return this.handleRequest(`${API_BASE_URL}/${id}`);
    }

    async addNewUser(user: PostCreateDto): Promise<User> {
        return this.handleRequest(API_BASE_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    async updateUser(user: User): Promise<User> {
        return this.handleRequest(`${API_BASE_URL}/${user.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    async deleteUserById(id: number): Promise<User> {
        return this.handleRequest(`${API_BASE_URL}/${id}`, {
            method: 'DELETE'
        });
    }

    private async handleRequest(url: string, options?: RequestInit) {
        try {
            const usersResp = await fetch(url, options);
            if (usersResp.status >= 400) {
                return Promise.reject(usersResp.body);
            }
            return usersResp.json();
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

export const UsersAPI: UsersApiClient = new UserApiClientImpl();

