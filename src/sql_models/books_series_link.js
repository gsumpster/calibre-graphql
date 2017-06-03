/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books_series_link', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    book: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    series: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'books_series_link',
    timestamps: false,
  });
};
