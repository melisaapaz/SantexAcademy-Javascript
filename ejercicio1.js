console.log("Aquí comienza el ejercicio 1:")
//creo una función que recibe un nro que representará la cantidad de filas de mi pirámide:
function piramide(numero) {
    if (isNaN(numero)) {
      throw "Error: Ingrese un número entero";
    }  

    if (numero > 50) {
      throw "Error: Ingrese un número menor a 50";
    }  
    // Recorro desde el nro. 1 hasta el nro. que llega por parámetro:
    for (let i = 1; i <= numero; i++) {
       //inicializo la variable f que representa una "fila":
      let f = '';  
       // Se agrega el nro. a la "fila":
       for (let j = 1; j <= i; j++) {
         f += j;
      }    
      // Imprimo por consola el resultado: fila
    console.log(f);   
  }
}

try {
  // Pido que el usuario ingrese un nro. para ver el resultado por consola:
  const numero = prompt("Ingrese un número para dibujar una pirámide:");
  //Llamo a la fn y utilizo un parseFloat para tratar de convertir lo que escribe el usuario a entero:
  piramide(parseFloat(numero));
}
catch(error) {
  console.error(error);
}   
finally {
  //Este bloque se va a ejecutar siempre:
  console.log("Aquí finaliza el ejercicio 1");
  console.log("");
}


