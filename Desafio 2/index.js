const Contenedor = require("./contenedor");
const productos = new Contenedor("./productos.json");


// productos.save({ title: "Silla Gamer Aerocool Thunderx3 XC3 Azure Azul", price: 68900, thumbnai: "https://via.placeholder.com/150/771796" }); // agrega un nuevo producto al producto.json
// productos.getById(3) // muestra el producto por ID
// productos.getAll() //  para mostrar todos los productos
// productos.deleteAll() //  para borrar todos los productos de productos.json