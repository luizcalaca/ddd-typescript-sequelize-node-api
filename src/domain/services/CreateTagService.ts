import { HashTag } from "../entities/Tag/HashTag";
import { Tag, TagType } from "../entities/Tag/Tag";
import { ValidationError } from "../errors/ValidationError";

export interface CreateTagRepository {
  create(tag: Tag): Promise<{ id: number }>
}

export class CreateTagService {
  constructor(
    private repository: CreateTagRepository
  ){}

  async create(name: string, type: string) {
    const tag = this.getTagInstance(name, type);
    const { id } = await this.repository.create(tag);

    return { id }
  }

  private getTagInstance(name: string, type: string): Tag {
    if(type === TagType.category){
      return new Tag(name, TagType.category)
    }

    if(type === TagType.hash) {
      return new HashTag(name)
    }

    throw new ValidationError('INVALID_TAG_TYPE')
  }
}