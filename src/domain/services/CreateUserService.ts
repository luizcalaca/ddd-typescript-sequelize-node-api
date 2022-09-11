// - Validar dados do usuário [x]
// - Salvar os dados no banco [x]
// - Retornar id do usuário criado [x]

import { AdminUser } from "../entities/User/AdminUser";
import { AuthorUser } from "../entities/User/AuthorUser";
import { Role, User } from "../entities/User/User";
import { ValidationError } from "../errors/ValidationError";

export interface CreateUserRepository {
  create(user: User): Promise<{ id: number }>
}

export class CreateUserService {
  constructor(
    private repository: CreateUserRepository
  ){}

  async create(email: string, password: string, role: string) {
    const user = this.getUserInstance(email, password, role);

    const { id } = await this.repository.create(user);

    return { id }
  }

  private getUserInstance(email: string, password: string, role: string): User {
    if(role === Role.admin) {
      return new AdminUser(email, password)
    }

    if(role === Role.author) {
      return new AuthorUser(email, password)
    }

    throw new ValidationError('INVALID_ROLE');
  }
}