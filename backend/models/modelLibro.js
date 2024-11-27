const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

// Definimos el modelo Libro
const Libro = sequelize.define("Libro", {
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
  disponible: {
    type: DataTypes.ENUM('Activo', 'Inactivo'),
    defaultValue: 'Activo',
  },
  genero: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
}, {
  tableName: 'libro', // Nombre de la tabla en la base de datos
  timestamps: true, 
});

const Autor = require("./modelAutor");

// Relación 1:N entre Autor y Libro
Libro.belongsTo(Autor, { foreignKey: 'autorId' });
Autor.hasMany(Libro, { foreignKey: 'autorId' });

module.exports = Libro;
