import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: "mysql",
    port: Number(process.env.DB_PORT) || 3306,
    logging: false,
    dialectOptions: {
      decimalNumbers: true,
      ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: true
      } : false
    },
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully.");
    console.log("Connection config:", {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      hasPassword: !!process.env.DB_PASSWORD
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
