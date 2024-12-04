import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";
import sequelize from "./config/connection";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// API routes
app.use("/api", routes);

// Serve static files from React app
app.use(express.static(path.join(__dirname, "../..", "client/build")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../..", "client/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});