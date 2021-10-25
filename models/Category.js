const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      pimaryKey: true,
      autoIncrement: true,
    },
    // * `id`
    //   * Integer.
    //   * Doesn't allow null values.
    //   * Set as primary key.
    //   * Uses auto increment.
    category_name: { type: DataTypes.String, allowNull: false },
    // * `category_name`
    //   * String.
    //   * Doesn't allow null values.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
