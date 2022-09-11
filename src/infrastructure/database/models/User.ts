import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize';

interface UserRow {
  id: number;
  email: string;
  password: string;
  role: string;
}

export class SequelizeUser extends Model<UserRow, Omit<UserRow, 'id'>> {
  declare id: number;
  declare email: string;
  declare password: string;
  declare role: string;
}

SequelizeUser.init({
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  }, 
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  tableName: 'users'
})