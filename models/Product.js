// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
const { Category } = require(".");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    //   * `Product`
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // * `id`
    //   * Integer.
    //   * Doesn't allow null values.
    //   * Set as primary key.
    //   * Uses auto increment.
    product_name: { type: DataTypes.STRING, allowNull: false },
    // * `product_name`
    //   * String.
    //   * Doesn't allow null values.
    price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      validate: { isDecimal: true },
    },
    // * `price`
    //   * Decimal.
    //   * Doesn't allow null values.
    //   * Validates that the value is a decimal.
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: { isNumeric: true },
    },
    // * `stock`
    //   * Integer.
    //   * Doesn't allow null values.
    //   * Set a default value of `10`.
    //   * Validates that the value is numeric.
    category_id: {
      type: DataTypes.INTEGER,
      references: { model: Category, key: "id" },
    },
    // * `category_id`
    //   * Integer.
    //   * References the `Category` model's `id`.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
