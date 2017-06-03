/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books_languages_link', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    book: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lang_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'books_languages_link',
    timestamps: false,
  });
};
