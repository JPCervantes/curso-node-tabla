const { createTableFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

createTableFile(argv.b, argv.l, argv.hasta)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
