import { Sequelize } from "sequelize";
import { development } from "./config";

export const sequelize = new Sequelize(development)