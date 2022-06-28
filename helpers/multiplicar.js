const fs = require("fs");
const colors = require("colors");

const createTableFile = async (base = 0, listar, hasta = 11) => {
  try {
    let output = "";
    let consola = "";

    for (let i = 1; i < hasta + 1; i++) {
      output += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".yellow} ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("================================================".bgGreen);
      console.log("Tabla del: ".red, colors.magenta(base));
      console.log("================================================".bgGreen);
      console.log(output);
    }

    fs.writeFileSync(`./output/tabla${base}.txt`, output);
    return `Tabla del ${base}`;
  } catch (err) {
    throw err;
  }
};

module.exports = { createTableFile };
