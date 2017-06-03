/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('data', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    book: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    format: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    uncompressed_size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'data',
    timestamps: false,
  });
};
