import seedCategories from "./category-seeds";
import seedProducts from "./product-seeds";
import seedTags from "./tag-seeds";
import seedProductTags from "./product-tag-seeds";
import sequelize from "../config/connection";

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");

    await seedCategories();
    console.log("\n----- CATEGORIES SEEDED -----\n");

    await seedProducts();
    console.log("\n----- PRODUCTS SEEDED -----\n");

    await seedTags();
    console.log("\n----- TAGS SEEDED -----\n");

    await seedProductTags();
    console.log("\n----- PRODUCT TAGS SEEDED -----\n");

    console.log("\n----- ALL SEEDING COMPLETED -----\n");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
  process.exit(0);
};

seedAll();
