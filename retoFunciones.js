sumar = function(num1, num2, num3){
    let resultado;
    resultado=num1+num2+num3;
    return resultado;
}

obtenerInfo = function(nombre, apellido, profesion){
    return nombre+" "+apellido+" - "+profesion
}

mostrarResultado = function(sumando1,sumando2,sumando3){
    console.log("El resultado de sumar "+sumando1+" + "+sumando2 +" es "+sumando3);
}

hackearNasaEnPelicula = function(){
    console.log("Hackeando nasa 0%");
    console.log("Hackeando nasa 20%");
    console.log("Hackeando nasa 40%");
    console.log("Hackeando nasa 60%");
    console.log("Hackeando nasa 80%");
    console.log("Hackeando nasa 90%");
    console.log("Hackeando nasa 99%");
    console.log("La nasa ha sido hackeada");
}

calcularEdad  = function(anio){
    let anioActual;
    let calcularEdad;
    anioActual= new Date().getFullYear();
    calcularEdad= anioActual-anio;
    return calcularEdad;
}

calcularIVA = function(precioSinIVA){
    let valorIva;
    let precioConIVA;
    valorIva= (precioSinIVA*12)/100;
    precioConIVA=precioSinIVA+valorIva;
    return precioConIVA;
}

repasar = function(){
    console.log("Esta función fue creada solo para hacer un ejemplo de una función que no recibe nada y no retorna nada");
}

repasarMas = function(){
    return "En este punto debemos estar super claros en crear funciones"
}
llamarAtencion = function(nombre, mensaje){
    alert(nombre+" "+ mensaje +" !!");
    return nombre+" "+ mensaje +" !!";
}