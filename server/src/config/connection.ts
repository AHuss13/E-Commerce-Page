import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Log all environment variables for debugging
console.log('Database Environment Variables:', {
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PORT: process.env.DB_PORT,
  hasPassword: !!process.env.DB_PASSWORD,
  NODE_ENV: process.env.NODE_ENV
});

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
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
