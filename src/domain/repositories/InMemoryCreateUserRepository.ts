import { User } from "../entities/User/User";
import { CreateUserRepository } from "../services/CreateUserService";

const users: User[] = []

export class InMemoryCreateUserRepository implements CreateUserRepository {
  async create(user: User): Promise<{ id: number; }> {
    users.push(user);

    return {
      id: users.length
    }
  }
}