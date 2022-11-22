import "dotenv/config";
import { Options } from "sequelize";

const config: Options = {
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "123456",
  database: process.env.DB_NAME || "api_ng_cash",
  host: process.env.DB_HOST || "db",
  port: Number(process.env.DB_PORT) || 3002,
  define: {
    timestamps: true,
    underscored: true,
  },
  dialect: "postgres",
  dialectOptions: {
    timezone: "Z",
  },
  logging: false,
};

module.exports = config;
