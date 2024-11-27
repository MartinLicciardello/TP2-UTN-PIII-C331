const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

// Definimos el modelo Autor
const Autor = sequelize.define("Autor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'autor',  // Nombre de la tabla en la base de datos
  timestamps: true,    
});

module.exports = Autor;
