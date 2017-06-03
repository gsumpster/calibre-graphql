/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books_tags_link', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    book: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tag: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'books_tags_link',
    timestamps: false,
  });
};
