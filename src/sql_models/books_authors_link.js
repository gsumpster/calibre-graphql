/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books_authors_link', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    book: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'books_authors_link',
    timestamps: false,
  });
};
