module.exports = (sequelize, DataTypes) => {
  const App = sequelize.define('App', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    tableName: 'Apps',
    timestamps: false,
  });

  return App;
};