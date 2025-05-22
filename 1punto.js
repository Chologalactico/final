const readline = require("readline"); //Importacion de la libreria readline para leer desde la consola

//Creamos una funcion para eliminar las vocales de una cadena de texto
function eliminarVocales(str) {
  // Verificar que si sea un String en tal caso que no lo sea lanzara un error
  if (typeof str !== "string") {
    throw new TypeError("El argumento debe ser una cadena de texto");
  }
  // Si la cadena no contiene ninguna letra, lanza un error
  if (!/[a-zA-ZáéíóúÁÉÍÓÚ]/.test(str)) {
    throw new Error("La cadena debe contener al menos una letra");
  }
  // reemplazamos todas las vocales por una cadena vacia
  return str.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, "");
}

const rl = readline.createInterface({
  input: process.stdin, // input
  output: process.stdout, // output
});

// en consola se mostrara una pregunta y se espera una respuesta
rl.question("Escribe una palabra o frase: ", (respuesta) => {
  // Aqui llamamos a la funcion eliminarVocales con la respuesta del usuario
  console.log("Sin vocales:", eliminarVocales(respuesta));
  // y cerramos la lectura
  rl.close();
});
