import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";
import { SequelizeTag } from "./Tag";
import { SequelizeUser } from './User'

interface Post {
  id: number,
  title: string,
  description: string,
  user_id: number,
  tag_id: number
}

export class SequelizePost extends Model<Post, Omit<Post, 'id'>> {
  declare id: number;
  declare title: string;
  declare description: string;
  declare user_id: number
  declare tag_id: number
  declare createdAt: Date
  declare updatedAt: Date
}

SequelizePost.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
  {
    sequelize,
    tableName: 'posts'
  })

SequelizePost.belongsTo(SequelizeUser, {
  foreignKey: 'user_id',
})

SequelizePost.hasMany(SequelizeTag, {
  foreignKey: 'tag_id'
})