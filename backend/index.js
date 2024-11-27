const express = require("express");
const cors = require("cors");
const path = require("path");
const sequelize = require("./data/db");

// Importar las rutas de la API

const autorRoutes = require('./routes/autorRoute');  // Ruta para manejar los autores
const libroRoutes = require('./routes/libroRoute');  // Ruta para manejar los libros

// Crear la instancia de Express
const app = express();

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));

// Rutas de la API

app.use('/api/autores', autorRoutes);  // Ruta para manejar los autores en la API
app.use('/api/libros', libroRoutes);  // Ruta para manejar los libros en la API

// Iniciar el servidor y conectar con la base de datos
const port = 3001;
app.listen(port, async () => {
  try {
    await sequelize.authenticate();  // Verificar la conexión a la base de datos
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }

  console.log(`Servidor corriendo en el puerto ${port}`);
});
