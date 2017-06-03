/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('identifiers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    book: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'isbn'
    },
    val: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'identifiers',
    timestamps: false,
  });
};
