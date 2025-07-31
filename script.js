// descuento de 10 porciento
// Alerta opcional si se ingresa incorrectamente el codigo descuento

const form_DOM = document.getElementById("formulario");
const mensajeDefault = document.getElementById("mensajeDefault");
const mensajeTotal = document.getElementById("mensajeTotal");

form_DOM.addEventListener("submit", function(event){
    event.preventDefault();
    let resultado;

    let nombre = document.getElementById("nombre").value;
    let cantEntradas = Number(document.getElementById("cantidadEntradas").value);
    let precioEntrada = Number(document.getElementById("tipoEntrada").value);
    let codigoDes = document.getElementById("codigoDescuento").value;

    if (nombre === ""){
        errorNombre();
        return;
    }

    if (cantEntradas <= 0 ){
        errorCantidad();
        return;
    }

    if (codigoDes === "ROCK10"){
        precioEntrada = precioEntrada * 0.9;
    }

    resultado = precioEntrada * cantEntradas;

    reservaConfirmada(resultado, precioEntrada, nombre);
});

function aplicarDescuento(cantEntradas, precioEntrada, nombre){
    let resultado = (cantEntradas * precioEntrada) * 0.9;
    mensajeTotal.innerHTML = "Hola " + nombre + " pagaras $" + resultado + ". Precio por entrada: $" + (precioEntrada * 0.9);
    
    return resultado;
}

function reservaConfirmada(resultado, precioEntrada, nombre){
    mensajeDefault.classList.remove("errorMesage");
    mensajeDefault.classList.add("successMesage");

    mensajeDefault.innerHTML = "Reserva confirmada";
    mensajeTotal.innerHTML = "Hola " + nombre + " pagaras $" + resultado + ". Precio por entrada: $" + precioEntrada;
    mensajeTotal.classList.add("mensajeTotalStyle");
}

function errorNombre(){
    document.getElementById("mensajeDefault").innerHTML = "ERROR: El campo de Nombre no puede quedar vacio";
    mensajeDefault.classList.remove("successMesage");
    mensajeDefault.classList.add("errorMesage");
}

function errorCantidad(){
    mensajeDefault.innerHTML = "ERROR: La cantidad de entradas no puede ser menor o igual a 0";
    mensajeDefault.classList.remove("successMesage");
    mensajeDefault.classList.add("errorMesage");
}

