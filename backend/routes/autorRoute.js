const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController');  // Importamos el controlador de Autor

// Ruta para crear un nuevo Autor
router.post('/', autorController.crearAutor);

// Ruta para obtener todos los Autores
router.get('/', autorController.obtenerAutores);

// Ruta para obtener un Autor por su ID
router.get('/:id', autorController.obtenerAutorPorId);

// Ruta para eliminar un Autor por su ID
router.delete('/:id', autorController.eliminarAutor);

module.exports = router;
