-- Crear la base de datos 'tienda' si no existe
CREATE DATABASE IF NOT EXISTS tienda;

-- Seleccionar la base de datos 'tienda'
USE tienda;

-- Crear la tabla 'autor'
CREATE TABLE autor (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  createdAt DATETIME,
  updatedAt DATETIME,
  name VARCHAR(45),
  surname VARCHAR(45)
);

-- Crear la tabla 'libro'
CREATE TABLE libro (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  createdAt DATETIME,
  updatedAt DATETIME,
  disponible ENUM('Activo', 'Inactivo'),
  genero VARCHAR(45),
  nombre VARCHAR(75),
  autorId INT(11),
  FOREIGN KEY (autorId) REFERENCES autor(id)
);

-- Insertar dos autores en la tabla 'autor'
INSERT INTO autor (createdAt, updatedAt, name, surname)
VALUES
('2024-11-27 10:00:00', '2024-11-27 10:00:00', 'Messi', 'Lionel'),
('2024-11-27 10:05:00', '2024-11-27 10:05:00', 'Ana', 'Frank');

-- Insertar dos libros en la tabla 'libro'
INSERT INTO libro (createdAt, updatedAt, disponible, genero, nombre, autorId)
VALUES
('2024-11-27 10:10:00', '2024-11-27 10:10:00', 'Activo', 'Ficción', 'El viaje al fin del mundo', 1),
('2024-11-27 10:15:00', '2024-11-27 10:15:00', 'Inactivo', 'Misterio', 'La sombra en la oscuridad', 2);
