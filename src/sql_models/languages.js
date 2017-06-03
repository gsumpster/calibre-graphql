/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('languages', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    lang_code: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'languages',
    timestamps: false,
  });
};
