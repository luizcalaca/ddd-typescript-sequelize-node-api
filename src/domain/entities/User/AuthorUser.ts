import { ValidationError } from "../../errors/ValidationError";
import { Role, User } from "./User";

export class AuthorUser extends User {
  private static MIN_PASSWORD_LENGTH = 4;

  constructor(email: string, password: string){
    super(email, password, Role.author);

    this.validatePassword(password);
  }

  protected validatePassword(password: string) {
    if(password.length < AuthorUser.MIN_PASSWORD_LENGTH) {
      throw new ValidationError('INVALID_PASSWORD_LENGTH')
    }
  }
}