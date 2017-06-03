/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authors', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sort: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    timestamps: false,
    tableName: 'authors',
  });
};
