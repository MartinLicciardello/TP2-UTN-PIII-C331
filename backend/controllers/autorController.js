const Autor = require("../models/modelAutor");

// Crear un nuevo Autor
const crearAutor = async (req, res) => {
  try {
    const { name, surname } = req.body;  // Campos necesarios para crear el autor
    const autor = await Autor.create({ name, surname });
    res.status(201).json(autor);  // Devolvemos el autor creado
  } catch (error) {
    res.status(500).json({ error: error.message });  // Error en el servidor
  }
};

// Obtener todos los Autores
const obtenerAutores = async (req, res) => {
  try {
    const autores = await Autor.findAll();  // Obtenemos todos los autores
    res.status(200).json(autores);  // Devolvemos la lista de autores
  } catch (error) {
    res.status(500).json({ error: error.message });  // Error en el servidor
  }
};

// Obtener un Autor por ID
const obtenerAutorPorId = async (req, res) => {
  try {
    const autor = await Autor.findByPk(req.params.id);  // Buscamos al autor por su ID
    if (autor) {
      res.status(200).json(autor);  // Devolvemos el autor encontrado
    } else {
      res.status(404).json({ error: "Autor no encontrado" });  // Si no se encuentra el autor
    }
  } catch (error) {
    res.status(500).json({ error: error.message });  // Error en el servidor
  }
};

// Actualizar un Autor por ID
const actualizarAutor = async (req, res) => {
  try {
    const autor = await Autor.findByPk(req.params.id);  // Buscamos al autor por su ID
    if (autor) {
      const { name, surname } = req.body;  // Campos a actualizar
      await autor.update({ name, surname });  // Actualizamos los campos
      res.status(200).json({ message: 'Autor actualizado', autor });
    } else {
      res.status(404).json({ error: 'Autor no encontrado' });  // Si no se encuentra el autor
    }
  } catch (error) {
    res.status(500).json({ error: error.message });  // Error en el servidor
  }
};

// Eliminar un Autor por ID
const eliminarAutor = async (req, res) => {
  try {
    const autor = await Autor.findByPk(req.params.id);  // Buscamos al autor por su ID
    if (autor) {
      await autor.destroy();  // Eliminamos el autor
      res.status(200).json({ message: "Autor eliminado" });
    } else {
      res.status(404).json({ error: "Autor no encontrado" });  // Si no se encuentra el autor
    }
  } catch (error) {
    res.status(500).json({ error: error.message });  // Error en el servidor
  }
};

module.exports = { crearAutor, obtenerAutores, obtenerAutorPorId, actualizarAutor, eliminarAutor };
