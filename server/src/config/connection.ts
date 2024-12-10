import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

let sequelize: Sequelize;

// Use JawsDB if available (Heroku), otherwise use local config
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
  console.log('Using JawsDB connection');
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      logging: false,
      dialectOptions: {
        decimalNumbers: true
      }
    }
  );
  console.log('Using local database connection');
}

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
