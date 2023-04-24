function saludar(nombre, apellido) {
    console.log("Hola " + nombre + " " + apellido);
}

saludar("Melisa", "Apaz");

function suma(nro1, nro2) {
    return nro1 + nro2;
}

const resultado = suma(1, 1);
console.log("Resultado suma: " + resultado);

function division(a, b) {
    if (b === 0) {
        throw "No se puede dividir por 0";
    }

    try {
        return division(4, 0);
    }
    catch(error) {
        console.error(error);
        return error;
    }   
    finally {
        //Este bloque se va a ejecutar siempre
        console.log("Finally");
    }
}

const result = division(1, 1);
console.log("Resultado división: " + result);