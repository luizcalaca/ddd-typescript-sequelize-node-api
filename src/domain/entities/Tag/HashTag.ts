import { ValidationError } from "../../errors/ValidationError";
import { Tag, TagType } from "./Tag";

export class HashTag extends Tag {
  constructor(name: string) {
    super(name, TagType.hash);

    this.validateHashName(name);
    
    this.name = this.formatName(name);
  }

  private validateHashName(name: string) {
    if(name.includes(' ')) {
      throw new ValidationError('INVALID_NAME_WITH_SPACES')
    }
  }

  private formatName(name: string): string {
    let formattedName = name;

    if(!name.startsWith('#')) {
      formattedName = `#${name}`      
    }

    return formattedName.toLowerCase();
  }
}