const express = require('express');
const router = express.Router();

// Importamos las funciones de de Libro
const {
  crearLibro,
  obtenerLibros,
  obtenerLibroPorId,
  actualizarLibro,
  eliminarLibro
} = require('../controllers/libroController'); 

// Crear un nuevo libro
router.post('/', crearLibro);

// Obtener todos los libros
router.get('/', obtenerLibros);

// Obtener un libro por ID
router.get('/:id', obtenerLibroPorId);

// Actualizar un libro por ID
router.put('/:id', actualizarLibro);

// Eliminar un libro por ID
router.delete('/:id', eliminarLibro);

module.exports = router;
