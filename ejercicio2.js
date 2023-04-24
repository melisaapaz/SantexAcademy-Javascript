function hayConcidencias(array1, array2) {
    // Creo un array vacio que será lo que retorna mi función si encuentra coincidencias
    let coincidencias = [];
  
    // Recorro el primer array:
    for (let i = 0; i < array1.length; i++) {
      // Compruebo por cada iteración del for, si el elemento está en el segundo array:
      if (array2.includes(array1[i])) {
        // Si lo encontró, lo agrego a mi array de coincidencias
        coincidencias.push(array1[i]);
      }
    }
    // Retorno mi array de coincidencias
    return coincidencias;
  }
  
  console.log("Aquí comienza el ejercicio 2:")

  let array1 = ['rojo', 'azul', 'amarillo'];
  let array2 = ['blanco', 'negro', 'rojo'];
  let ejemplo1 = hayConcidencias(array1, array2);
  console.log(ejemplo1);
  
  let array3 = [4, 3, true, 'manzana'];
  let array4 = ['pera', 3, false, true, 3, true];
  let ejemplo2 = hayConcidencias(array3, array4);
  console.log(ejemplo2);

  console.log("Aquí finaliza el ejercicio 2")
  console.log("")