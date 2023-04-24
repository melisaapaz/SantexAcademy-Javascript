//*************************************************************************************************/
//3.1) Dado el siguiente objeto
//let carrito = {
 //   montoTotal: 10,
 //   productos: ["Leche"]
//}

//Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
//*************************************************************************************************/

class Carrito {
    constructor(montoTotal = 0, productos = []) {
      this.montoTotal = montoTotal;
      this.productos = productos;
    }

    //************************************************************************************************ */
    //3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
    //agregarProducto(nombre, precio, unidades) {
        // Completar aca...
    // }
      
    //Ej:
    // agregarProducto("Azucar", 5, 2);
      
    //Resultado esperado
    // carrito = {
    //    montoTotal: 20,
    //    productos: ["Leche", "Azucar"]
    //}
    //*************************************************************************************************/
    agregarProducto(nombre, precio, unidades) {
      //*************************************************************************************************/
      //3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e 
      //imprimir un mensaje si el item ya existe "ya existe el producto xxx"
      //*************************************************************************************************/

      // Buscamos si el producto existe en mi array de productos de la clase a través del NOMBRE
      // Uso una función fecha que aprendí en clase 3
      let productoExistente = this.productos.find(producto => producto['nombre'] === nombre);
  
      if (productoExistente) {
        // Si el producto existe (porque lo tengo en la variable productoExistente), notifico y finalizo:
        // Con ${nombre} accedo a lo que contiene dicha variable, aprendido en clase 3
        console.log(`%cYa existe el producto ${nombre}`, "font-weight: bold; color: blue;");
        return;
      }

      // Nvo. objeto
      let nuevoProducto = {
        nombre: nombre,
        precio: precio,
        unidades: unidades
      };
  
      // Agrego el nvo. producto al array 
      this.productos.push(nuevoProducto);
  
      // Actualizo el monto total
      this.montoTotal += precio * unidades;
    }  
  }
  
  console.log("Aquí comienza el ejercicio 3.1:")
  let carrito = new Carrito(10, ["Leche"]);
  console.log(carrito); 
  console.log("Aquí finaliza el ejercicio 3.1")
  console.log("")

  //No se cómo indicar qué no me actualice el monto del primer carrito que 
  //genero del punto 3.1, por eso generé un nvo. carrito
  console.log("Aquí comienza el ejercicio 3.2:")
  let carrito2 = new Carrito(10, ["Leche"]);
  carrito2.agregarProducto("Azucar", 5, 2);
  carrito2.agregarProducto("Harina", 4, 5);
  console.log(carrito2); 
  console.log("Aquí finaliza el ejercicio 3.2")
  console.log("")

  console.log("Aquí comienza el ejercicio 3.3:")
  let carrito3= new Carrito(10, ["Leche"]);
  carrito3.agregarProducto("Leche", 2, 3); 
  carrito3.agregarProducto("Pasas de uva", 5, 2);
  carrito3.agregarProducto("Escencia de vainilla", 4, 5);
  //Vuelvo a agregar leche:
  carrito3.agregarProducto("Leche", 2, 3); 
  console.log(carrito3); 
  console.log("Aquí finaliza el ejercicio 3.3")
  console.log("")