let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento() {
    let NumeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(intentos);
    if(numeroSecreto === NumeroUsuario){
        asignarTextoElemento("p", `Acertaste en ${intentos} ${(intentos === 1) ? "intento" : "intentos" }`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(NumeroUsuario > numeroSecreto){
            asignarTextoElemento("p","el numero secreto es menor")
        } else{
            asignarTextoElemento("p","El numero secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario")
    valorCaja.value="";
}

function generarSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ganaste")
    } else{
        if (listaNumerosSorteados.length == numeroMaximo) {
            asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        } else {
            //Si el numero generado está incluido en la lista 
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarSecreto();
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p", "Indica un numero del 1 al 10");
    numeroSecreto = generarSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();



