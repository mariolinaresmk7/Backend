const express = require("express");
const app = express();
const PORT = 8080;
const Contenedor = require("./contenedor");
const productos = new Contenedor("./productos.json");

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
server.on("error", (err) => console.log(`error en el servidor ${err}`));

app.get("/", (req, res) => {
  res.send(
    `<h1 style="text-align: center; color: red; margin-top: 40px">Desafio Numero 3</h1>`
  );
});

app.get("/productos", (req, res) => {
  const run = async () => {
    try {
      const arrayProductos = await productos.getAll();
			let card=''
      arrayProductos.map((item) => {
      card += `<div style="background-color: grey; color: white; text-align: center; height: auto; width: 300px"><img style="margin-top: 10px" height="200px" src="${item.thumbnail}"><h2>Nombre: ${item.title}</h2><h3>Precio: ${item.price}</h3></div>`;
    });
      res.send(
        `<h1 style="text-align: center">Productos:</h1><section style="display: flex; justify-content: space-around">${card}</section>`
      )  ;
    } catch (error) {
      console.log(`Error obteniendo todos los productos: ${error}`);
    }
  };
  run();
});

app.get("/productosRandom", (req, res) => {
  const run = async () => {
    try {
      const arrayProductos = await productos.getAll();
      let numero = Math.floor(Math.random() * arrayProductos.length);
      const producto = await productos.getById(numero + 1 );
      producto.map((item) => {
        let card = `<div style="background-color: grey; color: white; text-align: center; height: auto; width: 400px"><img style="margin-top: 10px", height="200px" src="${item.thumbnail}"><h2>Nombre: ${item.title}</h2><h3>Precio: ${item.price}</h3></div>`;
        res.send(
          `<h1 style="text-align: center">Producto al azar :</h1><section style="display: flex; justify-content: space-around">${card}</section>`
        );
      });
    } catch (error) {
      console.log(`Error obteniendo producto al azar: ${error}`);
    }
  };
  run();
});