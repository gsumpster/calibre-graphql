/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books_publishers_link', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    book: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    publisher: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'books_publishers_link',
    timestamps: false,
  });
};
