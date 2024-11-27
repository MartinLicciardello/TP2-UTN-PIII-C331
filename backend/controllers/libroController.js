const Libro = require("../models/modelLibro");
const Autor = require("../models/modelAutor");

// Crear un nuevo Libro
const crearLibro = async (req, res) => {
  try {
    const { nombre, genero, disponible, autorId } = req.body;  
    const libro = await Libro.create({
      nombre,
      genero,
      disponible,
      autorId  // Relación con Autor
    });
    res.status(201).json(libro);  // Devolvemos el libro creado con el código 201
  } catch (error) {
    res.status(500).json({ error: error.message });  // Error en el servidor
  }
};

// Obtener todos los Libros
const obtenerLibros = async (req, res) => {
  try {
    // Obtenemos todos los libros, con la relación de autor incluida
    const libros = await Libro.findAll({
      include: {
        model: Autor, 
        attributes: ['name', 'surname'] 
      }
    });
    res.status(200).json(libros);  // Devolvemos todos los libros
  } catch (error) {
    res.status(500).json({ error: error.message });  
  }
};

// Obtener un Libro por ID
const obtenerLibroPorId = async (req, res) => {
  try {
    const libro = await Libro.findByPk(req.params.id, {
      include: {
        model: Autor,  
        attributes: ['name', 'surname']
      }
    });
    if (libro) {
      res.status(200).json(libro);  // Devolvemos el libro encontrado
    } else {
      res.status(404).json({ error: "Libro no encontrado" });  
    }
  } catch (error) {
    res.status(500).json({ error: error.message });  
  }
};

// Actualizar un Libro por ID
const actualizarLibro = async (req, res) => {
  try {
    const libro = await Libro.findByPk(req.params.id);
    if (libro) {
      const { nombre, genero, disponible, autorId } = req.body;  // Campos a actualizar
      await libro.update({
        nombre,
        genero,
        disponible,
        autorId  // Actualizamos el autorId
      });
      res.status(200).json({ message: 'Libro actualizado', libro });
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });  // Si no se encuentra el libro
    }
  } catch (error) {
    res.status(500).json({ error: error.message });  // Error en el servidor
  }
};

// Eliminar un Libro por ID
const eliminarLibro = async (req, res) => {
  try {
    const libro = await Libro.findByPk(req.params.id);
    if (libro) {
      await libro.destroy();  // Eliminamos el libro
      res.status(200).json({ message: "Libro eliminado" });
    } else {
      res.status(404).json({ error: "Libro no encontrado" });  // Si no se encuentra el libro
    }
  } catch (error) {
    res.status(500).json({ error: error.message });  // Error en el servidor
  }
};

module.exports = { crearLibro, obtenerLibros, obtenerLibroPorId, actualizarLibro, eliminarLibro };
