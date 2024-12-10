import dotenv from 'dotenv';
import path from "path";

// Load environment variables FIRST
dotenv.config({ path: path.join(__dirname, '../../.env') });

import express from "express";
import cors from "cors";
import routes from "./routes";
import sequelize from "./config/connection";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Log to verify environment variables are loaded
console.log('DB Config:', {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  hasPassword: !!process.env.DB_PASSWORD
});

// API routes
app.use("/api", routes);

// Serve static files from React app
app.use(express.static(path.join(__dirname, "../..", "client/dist")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../..", "client/dist/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
