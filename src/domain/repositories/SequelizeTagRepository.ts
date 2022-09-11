import { SequelizeTag } from "../../infrastructure/database/models/Tag";
import { Tag } from "../entities/Tag/Tag";
import { CreateTagRepository } from "../services/CreateTagService";

export class SequelizeTagRepository implements CreateTagRepository {
  async create(tag: Tag): Promise<{ id: number; }> {
    const created = await SequelizeTag.create({
      name: tag.getName(),
      type: tag.getType()
    })

    return {
      id: created.id
    };
  }
}