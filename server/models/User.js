module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Card, {
      foreignKey: {
        name: "user_id",
        allowNull: false
      }
    });
  };

  return User;
};