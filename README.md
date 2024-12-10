# E-Eommerce Page

## Description

This is a robust back-end solution for e-commerce websites, built using Express.js API and configured to use Sequelize to interact with a MySQL database.

- **Motivation**: To create a scalable and efficient back-end system that can handle complex e-commerce data relationships
- **Purpose**: To provide businesses with a reliable API that can manage products, categories, and tags in their e-commerce platform
- **Problem Solved**: Simplifies the management of product inventory, categories, and tags while maintaining complex relationships between these entities
- **Learning Outcomes**: Gained deep understanding of:
  - Object-Relational Mapping (ORM) using Sequelize
  - RESTful API design principles
  - Database relationship management (one-to-many, many-to-many)
  - Async/await patterns in Node.js

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following content:

```env
DB_NAME='ecommerce_db'
DB_USER='your_mysql_username'
DB_PW='your_mysql_password'
```

4. Set up the database:

```bash
mysql -u root -p
source db/schema.sql
```

5. Seed the database:

```bash
npm run seed
```

6. Start the server:

```bash
npm start
```

## Usage

The API provides the following endpoints:

### Categories

- `GET /api/categories` - View all categories
- `GET /api/categories/:id` - View single category
- `POST /api/categories` - Create category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

### Products

- `GET /api/products` - View all products
- `GET /api/products/:id` - View single product
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Tags

- `GET /api/tags` - View all tags
- `GET /api/tags/:id` - View single tag
- `POST /api/tags` - Create tag
- `PUT /api/tags/:id` - Update tag
- `DELETE /api/tags/:id` - Delete tag

Demo Video: [Watch Demo](./Demo%20Video/E-Commerce%20Demo.mp4)
Alternative Link: [Google Drive](https://drive.google.com/file/d/1F2iFXn4vH9LtIR17ime10BUQABARTwIG/view)

## Features

- RESTful API endpoints
- MySQL database with Sequelize ORM
- Complex data relationships:
  - Products belong to Categories
  - Categories have many Products
  - Products belong to many Tags (through ProductTag)
  - Tags belong to many Products (through ProductTag)
- Data validation and error handling
- Environment variable configuration
- Database seeding capabilities

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
