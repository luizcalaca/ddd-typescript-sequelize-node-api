import { ValidationError } from "../../errors/ValidationError";
import { Role, User } from "./User";

export class AdminUser extends User {
  private static MIN_PASSWORD_LENGTH = 8;

  constructor(email: string, password: string){
    super(email, password, Role.admin);

    this.validatePassword(password);
  }

  protected validatePassword(password: string) {
    if(password.length < AdminUser.MIN_PASSWORD_LENGTH) {
      throw new ValidationError('INVALID_PASSWORD_LENGTH')
    }
  }
}