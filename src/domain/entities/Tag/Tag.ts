import { ValidationError } from "../../errors/ValidationError";

export enum TagType {
  hash = 'hash',
  category = 'category'
}

export class Tag {
  protected name: string;
  private type: TagType;

  constructor(name: string, type: TagType) {
    this.validateName(name);

    this.name = name,
    this.type = type;
  }

  private validateName(name: string) {
    if(name.length < 1 || name.length > 100){
      throw new ValidationError('INVALID_NAME_LENGTH')
    }
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}