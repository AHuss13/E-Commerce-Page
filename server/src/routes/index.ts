import { Router } from "express";
import apiRoutes from "./api";

const router = Router();

router.use("/", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

export default router;
