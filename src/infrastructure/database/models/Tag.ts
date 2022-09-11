import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

interface TagRow {
  id: number,
  name: string,
  type: string
}

export class SequelizeTag extends Model<TagRow, Omit<TagRow, 'id'>> {
  declare id: number;
  declare name: string;
  declare type: string;
}

SequelizeTag.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  timestamps: false,
  tableName: 'tags'
})