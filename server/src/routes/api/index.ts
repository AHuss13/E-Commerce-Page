import { Router } from "express";
import categoryRoutes from "./category-routes";
import productRoutes from "./product-routes";
import tagRoutes from "./tag-routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

export default router;
