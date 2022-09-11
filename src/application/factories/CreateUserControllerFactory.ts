import { SequelizeUserRepository } from "../../domain/repositories/SequelizeUserRepository";
import { CreateUserService } from "../../domain/services/CreateUserService";
import { CreateUserController } from "../../infrastructure/controller/CreateUserController";

export class CreateUserControllerFactory {
  static make() {
    // const repository = new InMemoryCreateUserRepository();
    const repository = new SequelizeUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    return controller;
  }
}