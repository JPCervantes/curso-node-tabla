const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    defaultValue: false,
    describe: "Muestra tabla en consola",
  })
  .option("hasta", {
    type: "number",
    defaultValue: 11,
    describe: "Veces que se repite la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
