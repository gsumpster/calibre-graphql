/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'Unknown'
    },
    sort: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timestamp: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    pubdate: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    series_index: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: '1.0'
    },
    author_sort: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isbn: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ''
    },
    lccn: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ''
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    },
    flags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    uuid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    has_cover: {
      type: "BOOL",
      allowNull: true,
      defaultValue: '0'
    },
    last_modified: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '2000-01-01 00:00:00+00:00'
    }
  }, {
    timestamps: false,
    tableName: 'books'
  });
};
