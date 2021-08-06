const Contenedor = require("./class.js");

/*Importo express */ const express = require("express");
/*Aplicación servidor*/ const app = express();

//Productos
let p1 = {
  title: "Heladera",
  price: 80000,
};

let p2 = {
  title: "Lavarropas",
  price: 60000,
};

const objetoContenedor = new Contenedor("productos.txt");

async function allFunctionsContenedor() {
  await objetoContenedor.save(p1);
  await objetoContenedor.save(p2);
  // await objetoContenedor.getAll();
  // await objetoContenedor.getById(3);
  await objetoContenedor.getBigId();
  // await objetoContenedor.deleteById(3);
  //await objetoContenedor.deleteAll();
}
allFunctionsContenedor();

app.get("/", (req, res) => {
  res.send("<h1 style='color: #4B4B4B'>Desafío Clase 3</h1>");
});

app.get("/productos", async (req, res) => {
  //Acá quiero que lea el archivo y me devuelve el objeto vacío
  let productos = await objetoContenedor.getAll();
  res.send(productos);
});

app.get("/productoRandom", async (req, res) => {
    let min = 1;
  let max = objetoContenedor.getBigId();
  let randomId = Math.floor(Math.random() * (max - min + 1) + min);
  let randomProduct = await objetoContenedor.getById(randomId);
  res.send(randomProduct);
});

const PORT = 3030;

const server = app.listen(PORT, () => {
  console.log(`Servidor express corriendo en el puerto ${PORT}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

//npm run express
//ver de neuvo lo de glitch
// minuto 1.47.41
